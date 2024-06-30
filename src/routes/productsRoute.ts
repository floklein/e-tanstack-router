import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../components/Root";
import { z } from "zod";
import { fetchProducts, searchProducts } from "../api";

export const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  validateSearch: z.object({
    search: z.string().optional(),
  }),
  loaderDeps: ({ search: { search } }) => ({ search }),
  loader: async ({ deps: { search } }) => {
    return search !== undefined
      ? await searchProducts(search)
      : await fetchProducts();
  },
}).lazy(() =>
  import("../components/Products").then((module) => module.ProductsRoute),
);
