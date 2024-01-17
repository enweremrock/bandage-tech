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
                      cursor: "pointer",
                      "& svg": {
                        flexShrink: 0,
                      },
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0009 5.95324L8.63651 4.55662L8.63594 4.55605C8.28804 4.20177 7.87304 3.92037 7.41517 3.72827C6.95731 3.53617 6.46575 3.43723 5.96922 3.43723C5.47269 3.43723 4.98113 3.53617 4.52326 3.72827C4.06544 3.92035 3.65047 4.20172 3.3026 4.55595C2.58865 5.28087 2.18846 6.25752 2.18846 7.275C2.18846 8.29259 2.58874 9.26935 3.30284 9.9943L3.30313 9.99459L9.77812 16.5508L10.0005 16.776L10.2228 16.5508L16.6978 9.99459L16.6981 9.9943C17.4122 9.26935 17.8125 8.29259 17.8125 7.275C17.8125 6.25753 17.4123 5.28088 16.6983 4.55595C16.3506 4.20148 15.9357 3.91997 15.4778 3.72791C15.02 3.53591 14.5286 3.43718 14.0322 3.4375C14.0319 3.4375 14.0317 3.4375 14.0315 3.4375L14.0317 3.75M10.0009 5.95324L11.3578 4.56949L11.3586 4.5687L11.5817 4.7875M10.0009 5.95324L11.357 4.57036M10.0009 5.95324L11.357 4.57036M14.0317 3.75C13.5746 3.74935 13.122 3.84089 12.701 4.01915C12.2801 4.19741 11.8994 4.45874 11.5817 4.7875M14.0317 3.75C14.4868 3.74962 14.9373 3.84008 15.3569 4.01609C15.7766 4.1921 16.1569 4.45011 16.4755 4.775L14.0317 3.75ZM11.5817 4.7875L11.357 4.57036M11.5817 4.7875L11.357 4.57036M14.0316 2.8125L14.0315 2.8125C13.4516 2.81201 12.8774 2.9273 12.3427 3.15161C11.8079 3.37593 11.3233 3.70475 10.9173 4.11879L10.9162 4.11998L10.2224 4.81998L10.0005 5.04394L9.77851 4.81998L9.08476 4.11998L9.08392 4.11913C8.67735 3.70575 8.19255 3.37744 7.6578 3.15333C7.12305 2.92923 6.54903 2.81381 5.96922 2.81381C5.38941 2.81381 4.81539 2.92923 4.28064 3.15333C3.7459 3.37744 3.26111 3.70574 2.85454 4.1191L14.0316 2.8125ZM14.0316 2.8125C14.6115 2.81266 15.1856 2.92827 15.7204 3.15259C16.2551 3.37691 16.7399 3.70544 17.1463 4.11904C17.9752 4.96287 18.4397 6.09841 18.4397 7.28125C18.4397 8.46391 17.9754 9.59929 17.1467 10.4431C17.1466 10.4432 17.1464 10.4434 17.1463 10.4435L10.0005 17.6802M14.0316 2.8125L10.0005 17.6802M10.0005 17.6802L2.85465 10.4435C2.85454 10.4434 2.85444 10.4433 2.85433 10.4432C2.02561 9.59939 1.56128 8.46396 1.56128 7.28125C1.56128 6.09846 2.02568 4.96295 2.85452 4.11913L10.0005 17.6802Z"
                        fill="#BDBDBD"
                        stroke="#252B42"
                        stroke-width="0.625"
                      />
                    </svg>
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
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M0 1.63333C0 1.46536 0.0667281 1.30427 0.185505 1.1855C0.304281 1.06673 0.465377 1 0.633353 1H2.53341C2.67469 1.00004 2.8119 1.04731 2.92322 1.1343C3.03454 1.22129 3.11357 1.34299 3.14776 1.48007L3.66078 3.53333H18.3672C18.4602 3.53342 18.5521 3.55398 18.6362 3.59356C18.7204 3.63315 18.7948 3.69077 18.8541 3.76235C18.9135 3.83393 18.9564 3.9177 18.9797 4.00772C19.0031 4.09774 19.0063 4.19179 18.9892 4.2832L17.0891 14.4165C17.062 14.5617 16.9849 14.6927 16.8714 14.7871C16.7578 14.8815 16.6148 14.9332 16.4672 14.9333H5.06682C4.91917 14.9332 4.7762 14.8815 4.66263 14.7871C4.54906 14.6927 4.47204 14.5617 4.44487 14.4165L2.54608 4.3022L2.0394 2.26667H0.633353C0.465377 2.26667 0.304281 2.19994 0.185505 2.08117C0.0667281 1.96239 0 1.8013 0 1.63333ZM3.92932 4.8L5.59251 13.6667H15.9415L17.6047 4.8H3.92932ZM6.33353 14.9333C5.66163 14.9333 5.01724 15.2002 4.54214 15.6753C4.06703 16.1504 3.80012 16.7948 3.80012 17.4667C3.80012 18.1385 4.06703 18.7829 4.54214 19.258C5.01724 19.7331 5.66163 20 6.33353 20C7.00543 20 7.64981 19.7331 8.12492 19.258C8.60003 18.7829 8.86694 18.1385 8.86694 17.4667C8.86694 16.7948 8.60003 16.1504 8.12492 15.6753C7.64981 15.2002 7.00543 14.9333 6.33353 14.9333ZM15.2005 14.9333C14.5286 14.9333 13.8842 15.2002 13.4091 15.6753C12.934 16.1504 12.6671 16.7948 12.6671 17.4667C12.6671 18.1385 12.934 18.7829 13.4091 19.258C13.8842 19.7331 14.5286 20 15.2005 20C15.8724 20 16.5168 19.7331 16.9919 19.258C17.467 18.7829 17.7339 18.1385 17.7339 17.4667C17.7339 16.7948 17.467 16.1504 16.9919 15.6753C16.5168 15.2002 15.8724 14.9333 15.2005 14.9333ZM6.33353 16.2C6.66948 16.2 6.99167 16.3335 7.22922 16.571C7.46678 16.8085 7.60023 17.1307 7.60023 17.4667C7.60023 17.8026 7.46678 18.1248 7.22922 18.3623C6.99167 18.5999 6.66948 18.7333 6.33353 18.7333C5.99758 18.7333 5.67539 18.5999 5.43783 18.3623C5.20028 18.1248 5.06682 17.8026 5.06682 17.4667C5.06682 17.1307 5.20028 16.8085 5.43783 16.571C5.67539 16.3335 5.99758 16.2 6.33353 16.2ZM15.2005 16.2C15.5364 16.2 15.8586 16.3335 16.0962 16.571C16.3337 16.8085 16.4672 17.1307 16.4672 17.4667C16.4672 17.8026 16.3337 18.1248 16.0962 18.3623C15.8586 18.5999 15.5364 18.7333 15.2005 18.7333C14.8645 18.7333 14.5423 18.5999 14.3048 18.3623C14.0672 18.1248 13.9338 17.8026 13.9338 17.4667C13.9338 17.1307 14.0672 16.8085 14.3048 16.571C14.5423 16.3335 14.8645 16.2 15.2005 16.2Z"
                        fill="#252B42"
                      />
                    </svg>
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
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z"
                        fill="black"
                      />
                      <path
                        d="M2 10C2 10 5 4.5 10 4.5C15 4.5 18 10 18 10C18 10 15 15.5 10 15.5C5 15.5 2 10 2 10ZM10 13.5C10.9283 13.5 11.8185 13.1313 12.4749 12.4749C13.1313 11.8185 13.5 10.9283 13.5 10C13.5 9.07174 13.1313 8.1815 12.4749 7.52513C11.8185 6.86875 10.9283 6.5 10 6.5C9.07174 6.5 8.1815 6.86875 7.52513 7.52513C6.86875 8.1815 6.5 9.07174 6.5 10C6.5 10.9283 6.86875 11.8185 7.52513 12.4749C8.1815 13.1313 9.07174 13.5 10 13.5Z"
                        fill="black"
                      />
                    </svg>
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
