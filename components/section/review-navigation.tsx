import { Box, Typography } from "@mui/material";
import { Container } from "../container-wrapper";
export const ReviewNavigation = () => {
  return (
    <Container
      sx={{
        display: {
          md: "block",
          xs: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #ECECEC",
        }}
      >
        <Typography
          sx={{
            padding: "24px",
          }}
          color="text.secondary"
          variant="body2"
        >
          Description
        </Typography>
        <Typography
          sx={{
            padding: "24px",
          }}
          color="text.secondary"
          variant="body2"
        >
          Additional Information
        </Typography>
        <Box
          sx={{
            padding: "24px",
            display: "flex",
            gap: "8px",
          }}
        >
          <Typography color="text.secondary" variant="body2">
            Reviews
          </Typography>
          <Typography color="success.dark" variant="body2">
            (0)
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
