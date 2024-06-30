import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { AppBar, Toolbar, Typography } from "@mui/material";

export const rootRoute = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <ScrollRestoration getKey={(location) => location.pathname} />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">
            App
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
