import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Container } from "../container-wrapper";

export const Jump = () => {
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
          gap: "3rem",
          padding: "2.4rem 0px 4.8rem 0px",
        }}
        mb="4.8rem"
      >
        <Box sx={{ marginRight: "auto" }}>
          <Typography variant="h3" color="text.primary" mb="3rem">
            the quick fox jumps over
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              width: "51.3rem",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
          </Box>
        </Box>
        <Box
          component="figure"
          sx={{
            width: "41.3rem",
            height: "37.2rem",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <Image
            src="/asset/images/jump.png"
            alt="jump"
            layout="fill"
            style={{
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </Box>
      </Box>
    </Container>
  );
};
