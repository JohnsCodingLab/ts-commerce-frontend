import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";
import { useAuthStore } from "@/store/authStore";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const BASE_URL = "http://localhost:3000/api/v1";

nprogress.configure({ showSpinner: false, speed: 400 });

interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

/* ──────────────────────────────────────────────
   PUBLIC CLIENT (no auth, no cookies)
────────────────────────────────────────────── */
export const publicApiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/* ──────────────────────────────────────────────
   PRIVATE CLIENT (access token + cookies)
────────────────────────────────────────────── */
export const privateApiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 🔑 required for refresh token cookie
});

/* ──────────────────────────────────────────────
   REQUEST INTERCEPTOR
────────────────────────────────────────────── */
privateApiClient.interceptors.request.use(
  (config: RetryAxiosRequestConfig) => {
    nprogress.start();

    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const deviceIp =
      typeof window !== "undefined" ? localStorage.getItem("current_ip") : null;

    if (deviceIp) {
      config.headers["X-Device-IP"] = deviceIp;
    }

    return config;
  },
  (error) => {
    nprogress.done();
    return Promise.reject(error);
  }
);

/* ──────────────────────────────────────────────
   RESPONSE INTERCEPTOR (AUTO REFRESH)
────────────────────────────────────────────── */
privateApiClient.interceptors.response.use(
  (response) => {
    nprogress.done();
    return response;
  },
  async (error) => {
    nprogress.done();

    const originalRequest = error.config as RetryAxiosRequestConfig;

    // Prevent infinite loop + skip logout endpoint
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/auth/logout")
    ) {
      originalRequest._retry = true;

      try {
        // 🔁 Refresh token (cookie-based)
        const refreshResponse = await axios.post(
          `${BASE_URL}/auth/refresh-token`,
          {},
          { withCredentials: true }
        );

        const newAccessToken = refreshResponse.data?.accessToken;

        if (!newAccessToken) {
          throw new Error("No access token returned from refresh");
        }

        const { user, login } = useAuthStore.getState();
        login(user!, newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return privateApiClient.request(originalRequest);
      } catch (refreshError) {
        // Hard logout if refresh fails
        useAuthStore.getState().logout();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
