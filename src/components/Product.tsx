import { createLazyRoute, Link } from "@tanstack/react-router";
import { Button, Container, Toolbar, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { productRoute } from "../routes/productRoute";

export const ProductRoute = createLazyRoute("/$productId")({
  component: Product,
});

function Product() {
  const { productId } = productRoute.useParams();
  const product = productRoute.useLoaderData();

  const previous = Number(productId) - 1;
  const next = Number(productId) + 1;

  return (
    <Container>
      <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
        <Button
          disabled={previous <= 0}
          component={Link}
          to={`/${previous}`}
          startIcon={<ArrowBackIos />}
        >
          Previous
        </Button>
        <Button component={Link} to={`/${next}`} endIcon={<ArrowForwardIos />}>
          Next
        </Button>
      </Toolbar>
      <Typography variant="h6">product {productId}</Typography>
      <Typography component="pre">
        {JSON.stringify(product, null, 2)}
      </Typography>
    </Container>
  );
}
