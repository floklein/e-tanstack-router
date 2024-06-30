import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "../components/Root";
import { productRoute } from "./productRoute";
import { productsRoute } from "./productsRoute";

const routeTree = rootRoute.addChildren([productsRoute, productRoute]);

export const router = createRouter({
  routeTree,
});
