import { Aws, Hooli, Mongo, Reddit, Stripe } from "@/icons";
import { Lyst } from "@/icons/lyft";
import { Box, Grid } from "@mui/material";
import { Container } from "../container";

const brands = [
  {
    title: "hooli",
    icon: Hooli,
  },
  {
    title: "Lyst",
    icon: Lyst,
  },
  {
    title: "Mongo",
    icon: Mongo,
  },
  {
    title: "Stripe",
    icon: Stripe,
  },
  {
    title: "Aws",
    icon: Aws,
  },
  {
    title: "Reddit",
    icon: Reddit,
  },
];

export const Vendor = () => {
  return (
    <Container
      sx={{
        padding: {
          md: "0px 19.5rem",
          xs: "5rem 0px",
        },
      }}
    >
      <Box sx={{ flexGrow: 1, py: "5rem" }}>
        <Grid
          container
          spacing={{ xs: 6, md: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          {brands.map((item) => {
            const Icon = item.icon;
            return (
              <Grid
                key={item.title}
                item
                xs={12}
                sm={2}
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box flexShrink={0}>
                  <Icon />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};
