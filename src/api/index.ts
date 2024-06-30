import { sleep } from "../lib/sleep";
import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  thumbnail: z.string(),
  images: z.array(z.string()),
});

const productsSchema = z.object({
  products: z.array(productSchema),
});

export const fetchProducts = async () => {
  await sleep(2000);
  const { products } = productsSchema.parse(
    await (await fetch("https://dummyjson.com/products?limit=0")).json(),
  );
  return products;
};

export const searchProducts = async (search: string) => {
  await sleep(2000);
  const { products } = productsSchema.parse(
    await (
      await fetch(`https://dummyjson.com/products/search?q=${search}`)
    ).json(),
  );
  return products;
};

export const fetchProduct = async (productId: string) => {
  await sleep(2000);
  return productSchema.parse(
    await (await fetch(`https://dummyjson.com/products/${productId}`)).json(),
  );
};
