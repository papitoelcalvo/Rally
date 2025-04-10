import { object, string } from "zod";

export const LoginSchema = object({
    email: string()
    .email("Invalid email address")
    .min(1, "Email is required"),
    username: string()
    .min(1, "Username is required"),
    password: string()
    .min(1, "Password is required")
});

export const CreateSchema = object({
    username: string()
    .min(1, "Username is required"),
    password: string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character")
 });
