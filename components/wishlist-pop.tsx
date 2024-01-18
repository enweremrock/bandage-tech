import {
  useDispatch,
  useSelector,
  wishlistSelector,
  wishlistSlice,
} from "@/redux";
import { Box, Grid, Popper, Typography } from "@mui/material";
import Image from "next/image";

type CartPopProps = {
  anchorEl: HTMLElement | null;
};

export const WishlistPopup = ({ anchorEl }: CartPopProps) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const wishlist = useSelector(wishlistSelector);
  const dispatch = useDispatch();

  return (
    <Popper id={id} open={open} anchorEl={anchorEl}>
      <Box
        sx={{
          p: 2,
          bgcolor: "#fff",
          width: {
            md: "500px",
            xs: "100vw",
          },
          border: "1px solid #E8E8E8",
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
          borderRadius: "5px",
        }}
      >
        <Typography mb={2} variant="h4">
          Wishlist
        </Typography>

        {wishlist.length > 0 ? (
          <>
            <Box sx={{ maxHeight: "50rem", overflow: "auto" }}>
              {wishlist.map((item) => (
                <Grid
                  key={item.id}
                  container
                  bgcolor="#F1F3F4"
                  alignItems="center"
                  p={2}
                  borderRadius="10px"
                  position="relative"
                  mb={2}
                >
                  <Grid item xs={4} sm={2} md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: {
                          md: "5rem",
                          xs: "5rem",
                        },
                        height: {
                          md: "5rem",
                          xs: "5rem",
                        },
                        borderRadius: "1rem",
                        overflow: "hidden",
                        position: "relative",
                      }}
                      component="figure"
                    >
                      <Image
                        src={item.image}
                        alt="jump"
                        layout="fill"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4} sm={3} md={4}>
                    <Typography variant="h6" color="text.primary">
                      {item.title}
                    </Typography>
                  </Grid>

                  <Grid item xs={4} sm={3} md={4}>
                    <Typography
                      sx={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch(
                          wishlistSlice.actions.removeFromCart({
                            id: item.id,
                          })
                        )
                      }
                    >
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </>
        ) : (
          <Box>
            <Typography variant="h5" textAlign="center">
              No item yet!
            </Typography>
          </Box>
        )}
      </Box>
    </Popper>
  );
};
