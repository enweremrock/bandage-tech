import { AlarmIcon, GraphIcon, RightArrow } from "@/icons";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const posts = [
  {
    url: "/asset/images/post-1.png",
    title: `Loudest à la Madison #1 (L'integral)`,
    subtitle: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
    createdDate: "22 April 2021",
    totalComment: "10 comments",
    tags: ["Google", "Trending", "News"],
  },
  {
    url: "/asset/images/post-2.png",
    title: `Loudest à la Madison #1 (L'integral)`,
    subtitle: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
    createdDate: "22 April 2021",
    totalComment: "10 comments",
    tags: ["Google", "Trending", "News"],
  },
  {
    url: "/asset/images/post-3.png",
    title: `Loudest à la Madison #1 (L'integral)`,
    subtitle: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
    createdDate: "22 April 2021",
    totalComment: "10 comments",
    tags: ["Google", "Trending", "News"],
  },
];
export const FeaturePost = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: {
          md: "99.4rem",
        },
      }}
      mt="1.6rem"
    >
      <Box
        sx={{
          padding: {
            md: "0px 195px",
          },
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            padding: "80px 0px",
            flexDirection: "column",
            alignItems: "center",
            gap: "8rem",
            height: "100%",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: {
                xs: "27.9rem",
                md: "100%",
              },
            }}
          >
            <Typography variant="h6" color="primary" mb="1rem">
              Practice Advice
            </Typography>
            <Typography variant="h2" color="text.primary">
              Featured Products
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              px: {
                xs: "4rem",
              },

              flexDirection: {
                md: "row",
                xs: "column",
              },

              gap: {
                md: "1rem",
                xs: "3rem",
              },
            }}
          >
            {posts.map((item) => (
              <Box
                key={item.url}
                sx={{
                  flexBasis: {
                    md: "calc(33.33% - 6.67px)",
                    xs: "100%",
                  },
                  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
                }}
              >
                <Box
                  component="figure"
                  sx={{
                    width: {
                      md: "34.8rem",
                      xs: "100%",
                    },
                    height: "30rem",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <Image
                    src={item.url}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    padding: "2.5rem 2.5rem 3.5rem 2.5rem",
                    flexDirection: "column",

                    gap: "1rem",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "1.5rem" }}>
                    {item.tags.map((item) => (
                      <Typography
                        key={item}
                        variant="subtitle2"
                        color="text.secondary"
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "15px 0px;",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: "5px" }}>
                      <AlarmIcon />
                      <Typography variant="subtitle2" color="text.secondary">
                        {item.createdDate}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "5px" }}>
                      <GraphIcon />
                      <Typography variant="subtitle2" color="text.secondary">
                        {item.totalComment}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    Learn More <RightArrow />
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
