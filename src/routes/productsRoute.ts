import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../components/Root";
import { z } from "zod";
import { fetchProducts, searchProducts } from "../api";

const productsSearchSchema = z.object({
  search: z.string().optional().catch(""),
});

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  validateSearch: productsSearchSchema,
  loaderDeps: ({ search: { search } }) => ({ search }),
  loader: async ({ deps: { search } }) => {
    return search ? await searchProducts(search) : await fetchProducts();
  },
}).lazy(() =>
  import("../components/Products").then((module) => module.ProductsRoute),
);
