import { StarFill, StarInComplete } from "@/icons";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const photos = [
  "/asset/images/review-1.png",
  "/asset/images/review-2.png",
  "/asset/images/review-3.png",
  "/asset/images/review-4.png",
  "/asset/images/review-5.png",
  "/asset/images/review-6.png",
  "/asset/images/review-7.png",
  "/asset/images/review-8.png",
  "/asset/images/review-9.png",
  // "/asset/images/review-10.png",
];
export const Review = () => {
  return (
    <Box
      sx={{
        width: "100%",

        height: {
          md: "68.2rem",
        },
        maxHeight: {
          md: "68.2rem",
        },
      }}
    >
      <Box
        sx={{
          padding: {
            md: "0px 195px 0px 117px",
            xs: "5.5rem 2.8rem 4.097rem 2.8rem",
          },
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: {
              md: "80px 0px",
            },
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: {
                md: "4.8rem",
              },
              height: "100%",
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              justifyContent: "space-between",
              gap: {
                xs: "3.7rem",
              },
            }}
          >
            <Box bgcolor="#fff" width={{ md: "47rem" }}>
              <Typography
                variant="h3"
                mb="2.8rem"
                sx={{
                  textAlign: "center",
                  px: {
                    xs: "4.8rem",
                  },
                }}
              >
                What they say about us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  justifyContent: "center",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <Box
                  component="figure"
                  sx={{ width: "9rem", height: "9rem", position: "relative" }}
                >
                  <Image
                    src="/asset/images/review.png"
                    alt="review photo"
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarInComplete />
                </Box>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  textAlign="center"
                  sx={{
                    px: {
                      xs: "4.8rem",
                    },
                  }}
                >
                  Slate helps you see how many more days you need to work to
                  reach your financial goal.
                </Typography>
                <Box>
                  <Typography
                    variant="body2"
                    color="primary.main"
                    textAlign="center"
                  >
                    Regina Miles
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.primary"
                    textAlign="center"
                  >
                    Designer
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                mb: {
                  xs: "4.8rem",
                },
                display: "flex",
                flexShrink: 0,
                columnGap: {
                  md: "17.85px",
                  xs: "1.4rem",
                },
                rowGap: {
                  md: "15.86px",
                  xs: "12.44px",
                },
                flexWrap: "wrap",

                width: {
                  md: "46.4rem",
                  xs: "100%",
                },
                overflow: "hidden",
              }}
            >
              {photos.map((item, idx) => (
                <Box
                  component="figure"
                  position="relative"
                  key={item}
                  sx={{
                    //flexBasis: "calc(33.33% - 11.9px)",
                    //height: "calc(33.33% - 11.9px)",
                    width: {
                      md: "142.769px",
                      xs: "calc(33.33% - 9.33px)",
                      //   xs: "11.2rem",
                    },
                    height: {
                      md: "142.769px",
                      xs: "11.2rem",
                      // xs: "calc(33.33% - 9.33px)",
                    },
                  }}
                >
                  <Image
                    src={item}
                    alt={`reviewer ${idx + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
