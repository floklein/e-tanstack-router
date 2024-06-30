import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  thumbnail: z.string(),
  images: z.array(z.string()),
});

export const productsSchema = z
  .object({
    products: z.array(productSchema),
  })
  .catch({ products: [] });

export const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  username: z.string(),
  password: z.string(),
  image: z.string(),
});

export type User = z.infer<typeof userSchema>;

export const usersSchema = z
  .object({
    users: z.array(userSchema),
  })
  .catch({ users: [] });

export const loginSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  image: z.string(),
  token: z.string(),
});

export type Login = z.infer<typeof loginSchema>;
