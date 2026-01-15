import type {
  LoginFormValues,
  RegisterFormValues,
} from "@/schemas/auth.schema";
import { privateApiClient, publicApiClient } from "./client";

const AUTH_BASE = "http://localhost:3000/api/v1/auth";

export const authService = {
  login: async (data: LoginFormValues) => {
    const response = await publicApiClient.post(`${AUTH_BASE}/login`, data);
    return response.data;
  },

  register: async (data: RegisterFormValues) => {
    const response = await publicApiClient.post(`${AUTH_BASE}/register`, data);
    return response.data;
  },

  logout: async () => {
    await privateApiClient.post(`${AUTH_BASE}/logout`);
  },
};
