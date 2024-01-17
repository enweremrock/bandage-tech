import { StarFill, StarInComplete } from "@/icons";
import { useMedia } from "@/lib/useMediaQuery";
import {
  cartSlice,
  toastSelector,
  toastSlice,
  useDispatch,
  wishlistSlice,
} from "@/redux";
import { Product } from "@/types/product";
import { Box, Button, Grid, Typography } from "@mui/material";
import { BsCart, BsFillEyeFill, BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { CartCarousel } from "../cart-carousel";
import { Container } from "../container-wrapper";
import { ProductDetailSkeleton } from "../product-skeleton";

export const CartPreview = ({
  product,
  status,
}: {
  product: Product | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}) => {
  const isMobile = useMedia();
  const dispatch = useDispatch();

  const toast = useSelector(toastSelector);

  const addToWishlist = () => {
    dispatch(
      wishlistSlice.actions.addWishlist({
        id: product?.id,
        image: product?.thumbnail,
        title: product?.title,
      })
    );
    dispatch(
      toastSlice.actions.showToast({
        isOpen: true,
        message: `${product?.title} added to the wishlist`,
      })
    );
  };

  const addToCart = async () => {
    dispatch(
      cartSlice.actions.addTocart({
        id: product?.id,
        image: product?.thumbnail,
        price: product?.price,
        category: product?.category,
        quantity: 1,
        title: product?.title,
      })
    );

    dispatch(
      toastSlice.actions.showToast({
        isOpen: true,
        message: `${product?.title} added to the cart`,
      })
    );
  };
  return (
    <Container
      sx={{
        px: {
          xs: "3.3rem",
          md: "19.5rem",
        },
      }}
    >
      {status === "loading" && (
        <Box>
          <ProductDetailSkeleton />
        </Box>
      )}
      {status === "succeeded" && (
        <Box sx={{ flexGrow: 1, pb: "4.8rem" }}>
          <Grid container spacing={{ xs: 3, md: 3 }} p={0}>
            <Grid item xs={12} sm={6} md={6} p={0}>
              <CartCarousel images={product?.images ?? []} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} p={0}>
              <Box px="2.4rem">
                <Typography variant="h4" mb="1.5rem">
                  {product?.title}
                </Typography>
                <Box sx={{ display: "flex", gap: "5px" }} mb="21.99px">
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarInComplete />
                  <Typography variant="h6" color="text.secondary">
                    10 Reviews
                  </Typography>
                </Box>
                <Typography variant="h3" color="text.primary" mb="5px">
                  ${product && new Intl.NumberFormat().format(product?.price)}
                </Typography>
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                  <Typography variant="h6" color="text.secondary">
                    Availability :
                  </Typography>
                  <Typography variant="h6" color="primary.main">
                    {product && product?.stock > 0
                      ? "In Stock"
                      : "Out of Stock"}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    mt: "3.2rem",
                    display: {
                      md: "none",
                      xs: "block",
                    },
                  }}
                >
                  {product?.description}
                </Typography>
                <hr
                  style={{
                    marginTop: isMobile ? "1.6rem" : "11.9rem",
                    marginBottom: isMobile ? "1.9rem" : "2.9rem",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    mb: "6.7rem",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <circle cx="15" cy="15" r="15" fill="#23A6F0" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <circle cx="15" cy="15" r="15" fill="#2DC071" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <circle cx="15" cy="15" r="15" fill="#E77C40" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <circle cx="15" cy="15" r="15" fill="#252B42" />
                  </svg>
                </Box>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Button
                    variant="contained"
                    sx={{ color: "#fff", whiteSpace: "nowrap" }}
                  >
                    Select Options
                  </Button>
                  <Box
                    onClick={addToWishlist}
                    sx={{
                      display: "flex",
                      width: "4rem",
                      height: "4rem",
                      padding: "1rem",
                      flexShrink: 0,
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #E8E8E8",
                      borderRadius: "50%",
                      fontSize: "2rem",
                      cursor: "pointer",
                      "& svg": {
                        flexShrink: 0,
                      },
                    }}
                  >
                    <BsHeart />
                  </Box>
                  <Box
                    onClick={addToCart}
                    sx={{
                      display: "flex",
                      width: "4rem",
                      height: "4rem",
                      padding: "1rem",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #E8E8E8",
                      borderRadius: "50%",
                      fontSize: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    <BsCart />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "4rem",
                      height: "4rem",
                      padding: "1rem",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "1px solid #E8E8E8",
                      borderRadius: "50%",
                      fontSize: "2rem",
                    }}
                  >
                    <BsFillEyeFill />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};
