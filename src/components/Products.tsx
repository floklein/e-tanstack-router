import { createLazyRoute } from "@tanstack/react-router";
import { Container } from "@mui/material";

export const ProductsRoute = createLazyRoute("/")({
  component: Products,
});

function Products() {
  return <Container>products</Container>;
}
