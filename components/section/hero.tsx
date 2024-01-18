import { useMedia } from "@/lib/useMediaQuery";
import { Box } from "@mui/material";
import { ItemInfo, ItemTitle } from "../item-info";

export const Hero = () => {
  const isMobile = useMedia();
  return (
    <Box
      sx={{
        width: "100%",
        height: {
          md: "77.6rem",
        },
      }}
    >
      <Box
        sx={{
          width: {
            md: "114.6rem",
            xs: "33.3rem",
          },
          padding: "0.4px 0",
          height: "100%",
        }}
        mx="auto"
      >
        <Box
          sx={{
            padding: {
              md: "8rem 0rem",
              xs: "2.4rem -0px",
            },
            display: "flex",
            gap: "1.5rem",
            height: "100%",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box
            sx={{
              flexBasis: {
                md: "45.1rem",
                xs: "30rem",
              },

              flexShrink: 0,
              gap: "1.5rem",
              position: "relative",
              backgroundImage: "url(/asset/images/1.webp)",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              backgroundSize: "cover",
            }}
          >
            <ItemInfo
              mainTitle={() => (
                <ItemTitle title="FURNITURE" variant={isMobile ? "h3" : "h2"} />
              )}
            />
          </Box>
          <Box
            sx={{
              flexBasis: "67.8rem",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              gap: "1.5rem",
            }}
          >
            <Box
              sx={{
                flexBasis: "30rem",
                flexShrink: 0,
                position: "relative",
                backgroundImage: "url(/asset/images/2.webp)",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
                backgroundSize: "cover",
              }}
            >
              <ItemInfo
                mainTitle={() => <ItemTitle title="FURNITURE" variant="h3" />}
              />
            </Box>
            <Box
              sx={{
                flexBasis: {
                  md: "30rem",
                },

                display: "flex",
                gap: "1.6rem",
                width: "100%",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box
                sx={{
                  flexBasis: {
                    md: "calc(50% - 8px)",
                    xs: "30rem",
                  },
                  position: "relative",
                  backgroundImage: "url(/asset/images/3.webp)",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  backgroundSize: "cover",
                }}
              >
                <ItemInfo
                  mainTitle={() => <ItemTitle title="FURNITURE" variant="h3" />}
                />
              </Box>
              <Box
                sx={{
                  //flexBasis: "calc(50% - 8px)",
                  flexBasis: {
                    md: "calc(50% - 8px)",
                    xs: "30rem",
                  },
                  position: "relative",
                  backgroundImage: "url(/asset/images/4.webp)",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  backgroundSize: "cover",
                }}
              >
                <ItemInfo
                  mainTitle={() => <ItemTitle title="FURNITURE" variant="h3" />}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
