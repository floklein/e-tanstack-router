import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { StrictMode, Suspense } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes";
import { TanStackRouterDevtools } from "./routes/TanStackRouterDevtools";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <Suspense>
        <TanStackRouterDevtools router={router} />
      </Suspense>
    </ThemeProvider>
  </StrictMode>,
);
