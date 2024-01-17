import {
  Facebook,
  Instagram,
  Message,
  Telephone,
  Twitter,
  Youtube,
} from "@/icons";
import styles from "@/styles/Home.module.css";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "../container";

export const ContactHeader = ({
  children,
  customStyle,
}: {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
}) => {
  return (
    <Container
      sx={{
        backgroundColor: "success.dark",
        minHeight: "5.8rem",
        display: {
          xs: "none",
          md: "block",
          sm: "none",
        },
      }}
      customStyle={{
        padding: "0.9rem 2.4rem 0.3rem",
        ...customStyle,
      }}
    >
      {children}

      {/* <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          component={Box}
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  color: "#fff",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Telephone />

                <span>(225) 555-0118</span>
              </Typography>
            </li>
            <li className={styles.li}>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  color: "#fff",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Message />
                <span>michelle.rivera@example.com</span>
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item>
          <Box p="1rem">
            <Typography variant="h6" sx={{ color: "#fff" }}>
              Follow Us and get a chance to win 80% off
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                }}
              >
                Follow Us &nbsp; :
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5.499px" }}>
              <Box component="span" p="0.5rem">
                <Instagram />
              </Box>
              <Box component="span" p="0.5rem">
                <Youtube />
              </Box>
              <Box component="span" p="0.5rem">
                <Facebook />
              </Box>
              <Box component="span" p="0.5rem">
                <Twitter />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid> */}
    </Container>
  );
};

export const HeaderContent = ({ page }: { page: string }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid
        item
        component={Box}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                color: "#fff",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: page === "product" ? "1.2rem" : "1.4rem",
                fontWeight: page === "product" ? "400" : "700",
                lineHeight: page === "product" ? "133.333%" : "171.429%",
              }}
            >
              <Telephone />

              <span>(225) 555-0118</span>
            </Typography>
          </li>
          <li className={styles.li}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                color: "#fff",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: page === "product" ? "1.2rem" : "1.4rem",
                fontWeight: page === "product" ? "400" : "700",
                lineHeight: page === "product" ? "133.333%" : "171.429%",
              }}
            >
              <Message />
              <span>michelle.rivera@example.com</span>
            </Typography>
          </li>
        </ul>
      </Grid>
      <Grid item>
        <Box p="1rem">
          <Typography variant="h6" sx={{ color: "#fff" }}>
            Follow Us and get a chance to win 80% off
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
              }}
            >
              Follow Us &nbsp; :
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "5.499px" }}>
            <Box component="span" p="0.5rem">
              <Instagram />
            </Box>
            <Box component="span" p="0.5rem">
              <Youtube />
            </Box>
            <Box component="span" p="0.5rem">
              <Facebook />
            </Box>
            <Box component="span" p="0.5rem">
              <Twitter />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
