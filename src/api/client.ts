import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";
import { useAuthStore } from "@/store/authStore";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const baseURL = "http://localhost:3000";

nprogress.configure({ showSpinner: false, speed: 400 });

interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

/**
 * PUBLIC CLIENT
 */
export const publicApiClient: AxiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

publicApiClient.interceptors.request.use((config) => {
  const deviceIp =
    typeof window !== "undefined" ? localStorage.getItem("current_ip") : null;

  if (deviceIp) {
    config.headers["X-Device-IP"] = deviceIp;
  }

  return config;
});

/**
 * PRIVATE CLIENT (Neural link)
 */
export const privateApiClient: AxiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

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

privateApiClient.interceptors.response.use(
  (response) => {
    nprogress.done();
    return response;
  },
  async (error) => {
    nprogress.done();

    const originalRequest = error.config as RetryAxiosRequestConfig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await publicApiClient.post(
          "/auth/refresh-token",
          {},
          { withCredentials: true }
        );

        const newAccessToken = refreshResponse.data?.token;

        if (newAccessToken) {
          const { user, login } = useAuthStore.getState();
          login(user!, newAccessToken);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return privateApiClient.request(originalRequest);
        }
      } catch (refreshError) {
        useAuthStore.getState().logout();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
