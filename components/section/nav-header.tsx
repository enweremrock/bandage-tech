import { CaretIcon, CartIcon, HeartIcon, MenuIcon, SearchIcon } from "@/icons";
import { UserIcon } from "@/icons/user";
import { useMedia } from "@/lib/useMediaQuery";
import { cartSelector, useSelector, wishlistSelector } from "@/redux";
import styles from "@/styles/Home.module.css";
import { Box, Link, Typography } from "@mui/material";
import NLink from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { CartButton, SearchCartButton, WishlistButton } from "../cart-button";
import { CartPop } from "../cart-pop";
import { Container } from "../container";
import { WishlistPopup } from "../wishlist-pop";

export const NavHeader = ({
  customStyle,
  page,
}: {
  customStyle?: React.CSSProperties;
  page?: string;
}) => {
  const isMobile = useMedia();

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [anchorElWishlist, setAnchorElWishlist] = useState<HTMLElement | null>(
    null
  );
  const cart = useSelector(cartSelector);
  const wishlist = useSelector(wishlistSelector);
  const totalCartItem = cart.reduce(
    (prev, current) => prev + current.quantity,
    0
  );

  const toggleCart = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setAnchorElWishlist(null);
  };

  const toggleWishList = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElWishlist(anchorElWishlist ? null : event.currentTarget);
    setAnchorEl(null);
  };

  return (
    <Container
      customStyle={{
        minHeight: "5.8rem",
        padding: "0px 17px 0px 38px;",
        maxWidth: "100%",
        ...customStyle,
      }}
    >
      <NavgationContent
        setIsMenuOpen={setIsMenuOpen}
        isMobile={isMobile}
        page={page}
        handleCartOpen={toggleCart}
        toggleWishList={toggleWishList}
        totalCartItem={totalCartItem}
        totalWishItem={wishlist?.length}
      />

      <NavigationItemMobile
        isMobile={isMobile}
        isMenuOpen={isMenuOpen}
        page={page}
      />

      <CartPop anchorEl={anchorEl} />
      <WishlistPopup anchorEl={anchorElWishlist} />
    </Container>
  );
};

const NavigationItemMobile = ({
  isMobile,
  isMenuOpen,
  page,
}: {
  isMobile: boolean;
  isMenuOpen: boolean;
  page?: string;
}) => {
  return (
    <Box
      sx={{
        display: {
          md: "none",
          xs: isMenuOpen ? "flex" : "none",
        },
        pb: "9.6rem",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Box
        component="ul"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <li className={styles.navListItem}>
          <Link variant="subtitle1" underline="none" color="text.secondary">
            Home
          </Link>
        </li>

        <li className={styles.navListItem}>
          <Link variant="subtitle1" underline="none" color="text.secondary">
            Product
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link variant="subtitle1" underline="none" color="text.secondary">
            Pricing
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link variant="subtitle1" underline="none" color="text.secondary">
            Contact
          </Link>
        </li>
      </Box>

      {page === "product" && <AuthNav page={page} />}
    </Box>
  );
};

export const NavgationContent = ({
  setIsMenuOpen,
  isMobile,
  page,
  handleCartOpen,
  totalCartItem,
  toggleWishList,
  totalWishItem,
}: {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
  page?: string;
  handleCartOpen: (e: React.MouseEvent<HTMLElement>) => void;
  toggleWishList: (e: React.MouseEvent<HTMLElement>) => void;
  totalCartItem: number;
  totalWishItem: number;
}) => {
  return (
    <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
      <Box
        mr="4rem"
        position="relative"
        sx={{
          flexBasis: "18.7rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <NLink href="/">
          <Typography variant="h3" color="text.primary">
            Bandage
          </Typography>
        </NLink>
      </Box>

      {!isMobile && (
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link variant="body2" underline="none" color="text.secondary">
              Home
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link
              variant="body2"
              underline="none"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center", gap: "0.9rem" }}
            >
              Shop <CaretIcon />
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link variant="body2" underline="none" color="text.secondary">
              About
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link variant="body2" underline="none" color="text.secondary">
              Blog
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link variant="body2" underline="none" color="text.secondary">
              Contact
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link variant="body2" underline="none" color="text.secondary">
              Pages
            </Link>
          </li>
        </ul>
      )}

      <Box ml="auto">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: {
              md: "1rem",
              xs: "2.3rem",
            },
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: {
                md: "flex",
                xs: "none",
              },
              gap: "0.5rem",
              alignItems: "center",
            }}
            p="1.5rem"
          >
            <Box component="span" color="primary.main">
              <UserIcon />
            </Box>
            <Typography variant="h6" color="primary.main">
              Login / Register
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexShrink: 0,
            }}
          >
            <SearchCartButton />
            <CartButton handleCartOpen={handleCartOpen} />
            <WishlistButton handleCartOpen={toggleWishList} />
            {/* {page !== "product" && (
              <>
                <SearchCartButton />
                <CartButton handleCartOpen={handleCartOpen} />
                <WishlistButton handleCartOpen={toggleWishList} />
              </>
            )}

            {page === "product" && !isMobile && (
              <>
                <SearchCartButton />
                <CartButton handleCartOpen={handleCartOpen} />
                <WishlistButton handleCartOpen={toggleWishList} />
              </>
            )} */}

            <Box
              component="span"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              p="1.5rem"
              sx={{
                flexShrink: 0,
                alignItems: "center",
                paddingRight: page === "product" ? "0" : "3.8rem",
                cursor: "pointer",
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <MenuIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const AuthNav = ({ page }: { page: string }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          padding: {
            md: "1rem",
            xs: "2.3rem",
          },
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "flex",
            },

            gap: "0.5rem",
            alignItems: "center",
            flexShrink: 0,
          }}
          p="1.5rem"
        >
          <Box component="span" color="primary.main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="29"
              viewBox="0 0 27 29"
              fill="none"
            >
              <g clip-path="url(#clip0_541_188)">
                <path
                  d="M13.5 14.5C15.2902 14.5 17.0071 13.7625 18.273 12.4497C19.5388 11.137 20.25 9.35651 20.25 7.5C20.25 5.64348 19.5388 3.86301 18.273 2.55025C17.0071 1.2375 15.2902 0.5 13.5 0.5C11.7098 0.5 9.9929 1.2375 8.72703 2.55025C7.46116 3.86301 6.75 5.64348 6.75 7.5C6.75 9.35651 7.46116 11.137 8.72703 12.4497C9.9929 13.7625 11.7098 14.5 13.5 14.5ZM18 7.5C18 8.73768 17.5259 9.92466 16.682 10.7998C15.8381 11.675 14.6935 12.1667 13.5 12.1667C12.3065 12.1667 11.1619 11.675 10.318 10.7998C9.47411 9.92466 9 8.73768 9 7.5C9 6.26232 9.47411 5.07534 10.318 4.20017C11.1619 3.325 12.3065 2.83333 13.5 2.83333C14.6935 2.83333 15.8381 3.325 16.682 4.20017C17.5259 5.07534 18 6.26232 18 7.5ZM27 26.1667C27 28.5 24.75 28.5 24.75 28.5H2.25C2.25 28.5 0 28.5 0 26.1667C0 23.8333 2.25 16.8333 13.5 16.8333C24.75 16.8333 27 23.8333 27 26.1667ZM24.75 26.1573C24.7477 25.5833 24.4035 23.8567 22.878 22.2747C21.411 20.7533 18.6502 19.1667 13.5 19.1667C8.3475 19.1667 5.589 20.7533 4.122 22.2747C2.5965 23.8567 2.2545 25.5833 2.25 26.1573H24.75Z"
                  fill="#23A6F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_541_188">
                  <rect
                    width="27"
                    height="28"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Box>
          <Typography
            variant="subtitle1"
            color="primary.main"
            sx={{ whiteSpace: "nowrap" }}
          >
            Login / Register
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexShrink: 0, flexDirection: "column" }}>
          <Box component="span" p="1.5rem">
            <SearchIcon />
          </Box>

          <Box
            component="span"
            p="1.5rem"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexShrink: 0,
            }}
          >
            <CartIcon
              sx={{
                display: {
                  xs: "inline-block",
                },
              }}
            />

            <Box component="span" color="primary.main">
              1
            </Box>
          </Box>
          <Box
            component="span"
            p="1.5rem"
            sx={{
              flexShrink: 0,
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <HeartIcon />{" "}
            <Box component="span" color="primary.main">
              1
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
