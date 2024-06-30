import { sleep } from "../lib/sleep";

export const fetchProduct = async (productId: string) => {
  await sleep(2000);
  return await (
    await fetch(`https://dummyjson.com/products/${productId}`)
  ).json();
};
