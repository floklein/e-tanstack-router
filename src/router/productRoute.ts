import { createRoute } from "@tanstack/react-router";
import { fetchProduct } from "../api";
import { rootRoute } from "./rootRoute";

export const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "product/$productId",
  loader: async ({ params }) => {
    return await fetchProduct(params.productId);
  },
}).lazy(() =>
  import("../components/Product").then((module) => module.ProductRoute),
);
