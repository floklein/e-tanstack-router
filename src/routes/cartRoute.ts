import { rootRoute } from "../components/Root";
import { createRoute, redirect } from "@tanstack/react-router";

export const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "cart",
  beforeLoad: async ({
    context: {
      auth: { isAuthenticated },
    },
  }) => {
    if (!isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: "/cart",
        },
      });
    }
  },
}).lazy(() => import("../components/Cart").then((module) => module.CartRoute));
