import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        height: {
          md: "64rem",
          xs: "71.2rem",
        },
        backgroundImage: {
          md: "url(/asset/images/experience.webp)",
          xs: "url(/asset/images/experience-mobile.webp)",
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",

        px: {
          md: "19.5rem",
          xs: "2.8rem",
        },
      }}
    >
      <Box
        sx={{
          padding: {
            md: "16rem 0px 11.2rem 0px",
            xs: "11.2rem 0px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: {
              md: "60.7rem",
            },
            marginInline: "auto",
            flexDirection: "column",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          <Typography variant="h6" color="primary.main">
            Designing Better Experience
          </Typography>

          <Typography variant="h2" color="text.primary" textAlign="center">
            Problems{" "}
            <br
              style={{
                display: isMobile ? "block" : "none",
              }}
            />{" "}
            trying to resolve the conflict between
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            order={isMobile ? "2" : "1"}
          >
            Problems trying to resolve the conflict{" "}
            <br
              style={{
                display: isMobile ? "block" : "none",
              }}
            />
            between the two major{" "}
            <br
              style={{
                display: isMobile ? "none" : "block",
              }}
            />{" "}
            realms of{" "}
            <br
              style={{
                display: isMobile ? "block" : "none",
              }}
            />
            Classical physics:{" "}
          </Typography>
          <Typography
            variant="h3"
            color="success.dark"
            order={isMobile ? "1" : "2"}
          >
            $16.48
          </Typography>
          <Button
            variant="contained"
            sx={{
              padding: "15px 40px",
              fontWeight: 700,
              borderRadius: "5px",
              color: "#fff",
              order: 3,
            }}
          >
            ADD YOUR CALL TO ACTION
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
