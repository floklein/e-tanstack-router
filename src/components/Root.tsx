import { Link, Outlet, ScrollRestoration } from "@tanstack/react-router";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import User from "./User";

export default function Root() {
  return (
    <>
      <ScrollRestoration getKey={(location) => location.pathname} />
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit" component={Link} to="/">
            App
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton color="inherit" component={Link} to="/cart">
              <ShoppingCart />
            </IconButton>
            <User />
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
