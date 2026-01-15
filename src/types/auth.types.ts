export interface User {
  id: string;
  email: string;
  username: string;
  role: "user" | "admin";
  avatar?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error?: string | null;
}

export interface AuthActions {
  login: (user: User, token: string) => void;
  logout: () => Promise<void>;
  setLoading: (status: boolean) => void;
  setError: (message: string | null) => void;
}
