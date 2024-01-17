import { Box, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

type ItemInfoProps = {
  mainTitle: () => React.ReactNode;
};
export const ItemInfo = ({ mainTitle }: ItemInfoProps) => {
  return (
    <Box
      p="2.4rem"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: " 5px",
      }}
    >
      <Typography variant="h6" color="success.main">
        5 Items
      </Typography>

      {mainTitle()}
      <Typography variant="h6" color="text.primary">
        Read More
      </Typography>
    </Box>
  );
};

type ItemTitleProp = {
  title: string;
  variant: Variant;
};

export const ItemTitle = ({ title, variant = "h2" }: ItemTitleProp) => {
  return (
    <Typography variant={variant} color="text.primary">
      {title}
    </Typography>
  );
};
