import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
import { fetchProducts, searchProducts } from "../api";
import { rootRoute } from "./rootRoute";

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
  component: lazyRouteComponent(() => import("../components/Products")),
});
