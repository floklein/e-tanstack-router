import {
  createRoute,
  lazyRouteComponent,
  redirect,
} from "@tanstack/react-router";
import { fetchUsers } from "../api";
import { z } from "zod";
import { rootRoute } from "./rootRoute";

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "login",
  beforeLoad: async ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: search.redirect ?? "/",
      });
    }
  },
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  loader: async () => {
    return await fetchUsers();
  },
  component: lazyRouteComponent(() => import("../components/Login")),
});
