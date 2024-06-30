import { createLazyRoute } from "@tanstack/react-router";

export const CartRoute = createLazyRoute("/cart")({
  component: Cart,
});

function Cart() {
  return <div>Cart</div>;
}
