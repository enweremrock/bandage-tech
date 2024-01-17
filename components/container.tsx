import { Container as MuiContainer, SxProps } from "@mui/material";

type ContainerProps = {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  sx?: SxProps;
};
export const Container = ({ children, customStyle, sx }: ContainerProps) => {
  return (
    <MuiContainer
      maxWidth={false}
      style={{
        maxWidth: "100%",
        marginInline: "auto",
        ...customStyle,
      }}
      sx={{ ...sx }}
    >
      {children}
    </MuiContainer>
  );
};
