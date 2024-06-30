import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../components/Root";
import { fetchProduct } from "../api";

export const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$productId",
  loader: ({ params }) => fetchProduct(params.productId),
}).lazy(() =>
  import("../components/Product").then((module) => module.ProductRoute),
);
