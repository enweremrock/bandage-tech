import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const ProductSkeleton = () => {
  return (
    <Box
      sx={{
        flexBasis: {
          md: "18.3rem",
          xs: "29.5rem",
        },
        height: "40rem",
        maxHeight: "40rem",
        position: "relative",
      }}
    >
      <Box
        sx={{ position: "relative", width: "100%", height: "23.8rem" }}
        component="figure"
      >
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
};

export const ProductDetailSkeleton = () => {
  return (
    <Box
      position="relative"
      sx={{
        flexBasis: {
          md: "18.3rem",
          xs: "29.5rem",
        },
        height: "40rem",
        maxHeight: "40rem",
        position: "relative",
        display: "flex",
        gap: "5rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "50%",
        }}
        component="figure"
      >
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "40%",
          height: {
            md: "30rem",
            xs: "27.7rem",
          },
        }}
      >
        <Box mb={3}>
          <Skeleton width="90%" />
        </Box>

        <Box mb={3}>
          <Skeleton width="60%" />
        </Box>
        <Box mb={3}>
          <Skeleton width="70%" />
        </Box>

        <Box mb={3}>
          <Skeleton width="40%" />
        </Box>

        <Box mb={3}>
          <Skeleton width="60%" />
        </Box>
        <Box mb={3}>
          <Skeleton width="70%" />
        </Box>

        <Box mb={3}>
          <Skeleton width="40%" />
        </Box>
        <Skeleton />
      </Box>
    </Box>
  );
};
