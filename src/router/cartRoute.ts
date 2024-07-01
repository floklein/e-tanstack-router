import {
  createRoute,
  lazyRouteComponent,
  redirect,
} from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { fetchCart } from "../api";

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
  loader: ({ context }) => fetchCart(context.auth.user!.id),
  component: lazyRouteComponent(() => import("../components/Cart")),
});
