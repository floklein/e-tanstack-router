import { getRouteApi } from "@tanstack/react-router";

const cartRoute = getRouteApi("/cart");

export default function Cart() {
  const cart = cartRoute.useLoaderData();

  return <div>${JSON.stringify(cart)}</div>;
}
