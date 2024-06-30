import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../components/Root";

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
}).lazy(() =>
  import("../components/Products").then((module) => module.ProductsRoute),
);
