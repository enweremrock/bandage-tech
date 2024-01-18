import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { Container } from "../container-wrapper";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export function BreadCrum() {
  const breadcrumbs = [
    <Link
      underline="none"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      variant="body1"
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Shop
    </Link>,
  ];

  return (
    <Container
      sx={{
        py: "2.4rem",
        px: {
          xs: "3.3rem",
          md: "19.5rem",
        },
      }}
    >
      <Stack spacing="1.5rem">
        <Breadcrumbs separator={<NavigationIcon />}>{breadcrumbs}</Breadcrumbs>
      </Stack>
    </Container>
  );
}

const NavigationIcon = () => {
  return (
    <svg
      aria-label="breadcrumb"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
    >
      <g clipPath="url(#clip0_541_574)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
          fill="#BDBDBD"
        />
      </g>
      <defs>
        <clipPath id="clip0_541_574">
          <rect width="9" height="16" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};
