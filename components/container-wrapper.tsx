import { Container as MuiContainer, SxProps } from "@mui/material";

type ContainerProps = {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  sx?: SxProps;
};
export const Container = ({ children, sx }: ContainerProps) => {
  return (
    <MuiContainer
      maxWidth={false}
      sx={{
        width: "100%",
        px: {
          md: "19.5rem",
        },
        ...sx,
      }}
    >
      {children}
    </MuiContainer>
  );
};
