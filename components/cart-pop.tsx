import { truncate } from "@/lib/truncate";
import { cartSelector, cartSlice, useDispatch, useSelector } from "@/redux";
import { Box, Grid, Popper, Typography } from "@mui/material";
import Image from "next/image";

type CartPopProps = {
  anchorEl: HTMLElement | null;
};

export const CartPop = ({ anchorEl }: CartPopProps) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const cart = useSelector(cartSelector);

  const totalCartPrice = cart.reduce(
    (prev, current) => prev + current.totalPrice,
    0
  );
  const dispatch = useDispatch();

  return (
    <Popper
      id={id}
      open={open}
      anchorEl={anchorEl}
      sx={{
        zIndex: "999999",
      }}
    >
      <Box
        sx={{
          p: 2,
          bgcolor: "#fff",
          width: {
            md: 600,
            xs: "100vw",
          },
          border: "1px solid #E8E8E8",
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
          borderRadius: "5px",
          position: "relative",
        }}
      >
        <Typography mb={2} variant="h4">
          My cart
        </Typography>

        {cart.length > 0 ? (
          <>
            <Box sx={{ maxHeight: "50rem", overflow: "auto" }}>
              {cart.map((item) => (
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
                  <Box
                    onClick={() =>
                      dispatch(
                        cartSlice.actions.removeFromCart({
                          id: item.id,
                        })
                      )
                    }
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </Box>
                  <Grid item xs={2} sm={2} md={2}>
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
                  <Grid item xs={3} sm={3} md={4}>
                    <Typography variant="h6" color="text.primary">
                      {truncate(item.title, 100, "...")}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={3} md={1}>
                    <Typography
                      variant="h4"
                      color="text.primary"
                      textAlign="center"
                    >
                      ${item.price}
                    </Typography>
                  </Grid>

                  <Grid item xs={2} sm={3} md={2}>
                    <Typography
                      variant="h4"
                      color="text.primary"
                      textAlign="center"
                    >
                      {item.quantity}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sm={3} md={3}>
                    <Box sx={{ display: "flex", gap: "1.5rem" }}>
                      <Box
                        onClick={() =>
                          dispatch(
                            cartSlice.actions.addTocart({
                              ...item,
                              quantity: 1,
                            })
                          )
                        }
                        sx={{
                          display: "flex",
                          width: "4rem",
                          height: "4rem",
                          padding: "1rem",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid #E8E8E8",
                          borderRadius: "50%",
                          bgcolor: "#fff",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                        </svg>
                      </Box>
                      <Box
                        onClick={() =>
                          dispatch(
                            cartSlice.actions.decreaseQuantity({
                              id: item.id,
                            })
                          )
                        }
                        sx={{
                          display: "flex",
                          width: "4rem",
                          height: "4rem",
                          padding: "1rem",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid #E8E8E8",
                          borderRadius: "50%",
                          bgcolor: "#fff",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 -960 960 960"
                          width="24"
                        >
                          <path d="M200-440v-80h560v80H200Z" />
                        </svg>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              ))}
            </Box>
            <Typography variant="h3" textAlign="right">
              ${new Intl.NumberFormat().format(totalCartPrice)}
            </Typography>
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
