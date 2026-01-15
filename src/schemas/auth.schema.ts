import * as z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid encrypted identity string (email)"),
  password: z.string().min(8, "Access key must be at least 8 characters"),
});

export const registerSchema = z
  .object({
    firstname: z.string().min(3, "Username must be 3+ characters"),
    lastname: z.string().min(3, "Username must be 3+ characters"),
    email: z.email("Invalid email format"),
    password: z.string().min(8, "Security key too short"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Security keys do not match",
    path: ["confirmPassword"],
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
