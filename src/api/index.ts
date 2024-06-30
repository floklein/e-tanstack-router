import { sleep } from "../lib/sleep";
import {
  loginSchema,
  productSchema,
  productsSchema,
  usersSchema,
} from "../zod";

export async function fetchProducts() {
  await sleep(2000);
  const { products } = productsSchema.parse(
    await (await fetch("https://dummyjson.com/products?limit=0")).json(),
  );
  return products;
}

export async function searchProducts(search: string) {
  await sleep(2000);
  const { products } = productsSchema.parse(
    await (
      await fetch(`https://dummyjson.com/products/search?q=${search}`)
    ).json(),
  );
  return products;
}

export async function fetchProduct(productId: string) {
  await sleep(2000);
  return productSchema.parse(
    await (await fetch(`https://dummyjson.com/products/${productId}`)).json(),
  );
}

export async function fetchUsers() {
  await sleep(2000);
  const { users } = usersSchema.parse(
    await (await fetch("https://dummyjson.com/users?limit=0")).json(),
  );
  return users;
}

export async function loginUser(username: string, password: string) {
  await sleep(2000);
  return loginSchema.parse(
    await (
      await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
    ).json(),
  );
}
