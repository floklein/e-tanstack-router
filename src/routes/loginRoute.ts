import { rootRoute } from "../components/Root";
import { createRoute, redirect } from "@tanstack/react-router";
import { fetchUsers } from "../api";
import { z } from "zod";

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "login",
  beforeLoad: async ({
    context: {
      auth: { isAuthenticated },
    },
  }) => {
    if (isAuthenticated) {
      throw redirect({
        to: "/",
      });
    }
  },
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  loader: () => fetchUsers(),
}).lazy(() =>
  import("../components/Login").then((module) => module.LoginRoute),
);
