import { cartSelector, useSelector, wishlistSelector } from "@/redux";
import { Box } from "@mui/material";

import { BsCart, BsHeart, BsSearch } from "react-icons/bs";

type CartButtonProps = {
  handleCartOpen: (e: React.MouseEvent<HTMLElement>) => void;
};
export const CartButton = ({ handleCartOpen }: CartButtonProps) => {
  const cart = useSelector(cartSelector);
  const totalCartItem = cart.reduce(
    (prev, current) => prev + current.quantity,
    0
  );
  return (
    <Box
      onClick={handleCartOpen}
      component="span"
      p="1.5rem"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        flexShrink: 0,
        color: {
          md: "primary.main",
          xs: "text.primary",
        },
        fontSize: {
          md: "1.6rem",
          xs: "2.4rem",
        },
      }}
    >
      <BsCart />
      {/* <CartIcon
        sx={{
          display: {
            md: "inline-block",
            xs: "none",
          },
        }}
      />
      <CartMobileIcon
        sx={{
          display: {
            md: "none",
            xs: "inline-block",
          },
        }}
      /> */}

      {totalCartItem > 0 && (
        <Box component="span" color="inherit">
          {totalCartItem}
        </Box>
      )}
    </Box>
  );
};

export const WishlistButton = ({ handleCartOpen }: CartButtonProps) => {
  const wishlist = useSelector(wishlistSelector);
  return (
    <Box
      onClick={handleCartOpen}
      component="span"
      p="1.5rem"
      sx={{
        display: {
          md: "flex",
          xs: "none",
        },
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        flexShrink: 0,
        color: {
          md: "primary.main",
          xs: "text.primary",
        },
        fontSize: {
          md: "1.6rem",
          xs: "2.4rem",
        },
      }}
    >
      <BsHeart />

      {wishlist.length > 0 && (
        <Box component="span" color="inherit">
          {wishlist.length}
        </Box>
      )}
    </Box>
  );
};

export const SearchCartButton = () => {
  return (
    <Box
      component="span"
      p="1.5rem"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        flexShrink: 0,
        color: {
          md: "primary.main",
          xs: "text.primary",
        },
        fontSize: {
          md: "1.6rem",
          xs: "2.4rem",
        },
      }}
    >
      <BsSearch />
    </Box>
  );
};
