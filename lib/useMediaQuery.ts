import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
export const useMedia = (media: number | Breakpoint = "md") => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(media));

  return isMobile;
};
