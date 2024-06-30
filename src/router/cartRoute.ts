import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";

export const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "cart",
  beforeLoad: async ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: "/cart",
        },
      });
    }
  },
}).lazy(() => import("../components/Cart").then((module) => module.CartRoute));
