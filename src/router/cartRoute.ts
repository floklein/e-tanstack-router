import {
  createRoute,
  lazyRouteComponent,
  redirect,
} from "@tanstack/react-router";
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
  component: lazyRouteComponent(() => import("../components/Cart")),
});
