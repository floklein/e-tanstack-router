import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "../components/Root";
import { productRoute } from "./productRoute";
import { productsRoute } from "./productsRoute";
import { cartRoute } from "./cartRoute";
import { loginRoute } from "./loginRoute";

const routeTree = rootRoute.addChildren([
  loginRoute,
  cartRoute,
  productsRoute,
  productRoute,
]);

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined,
  },
});
