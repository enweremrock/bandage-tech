/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export function CartCarousel({ images }: { images: string[] }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Carousel
        showArrows={true}
        showIndicators={false}
        swipeable={true}
        className="custom-carosel"
        statusFormatter={() => ""}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 99,
              // opacity: 0.4,
              p: 3,
            }}
          >
            <Box
              onClick={clickHandler}
              sx={{
                visibility: hasPrev ? "visible" : "hidden",
                cursor: "pointer",
                flexShrink: 0,
                opacity: 1,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="45"
                viewBox="0 0 24 45"
                fill="none"
              >
                <g clip-path="url(#clip0_541_596)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.4992 44.3019C23.3409 44.4597 23.1528 44.585 22.9457 44.6704C22.7386 44.7558 22.5166 44.7998 22.2924 44.7998C22.0682 44.7998 21.8462 44.7558 21.6391 44.6704C21.432 44.5849 21.2439 44.4597 21.0856 44.3019L0.631046 23.9647C0.472307 23.8073 0.346367 23.6203 0.260435 23.4144C0.174505 23.2085 0.130272 22.9878 0.130272 22.7649C0.130272 22.5419 0.174505 22.3212 0.260435 22.1153C0.346367 21.9094 0.472307 21.7224 0.631046 21.565L21.0856 1.2278C21.4057 0.909569 21.8398 0.730789 22.2924 0.730789C22.7451 0.730789 23.1792 0.909569 23.4992 1.2278C23.8193 1.54603 23.9991 1.97765 23.9991 2.42769C23.9991 2.87774 23.8193 3.30935 23.4992 3.62759L4.24809 22.7649L23.4992 41.9021C23.658 42.0595 23.7839 42.2466 23.8698 42.4525C23.9558 42.6584 24 42.8791 24 43.102C24 43.3249 23.9558 43.5457 23.8698 43.7516C23.7839 43.9575 23.658 44.1445 23.4992 44.3019Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_541_596">
                    <rect
                      width="24"
                      height="44.4706"
                      fill="white"
                      transform="translate(24 45) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Box>
          </Box>
        )}
        renderArrowNext={(clickHandler, hasPrev) => (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 99,

              p: 3,
            }}
          >
            <Box
              onClick={clickHandler}
              sx={{
                visibility: hasPrev ? "visible" : "hidden",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="45"
                viewBox="0 0 24 45"
                fill="none"
              >
                <g clip-path="url(#clip0_541_593)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.565959 0.698096C0.724296 0.540269 0.912395 0.41505 1.11948 0.329612C1.32657 0.244174 1.54857 0.200195 1.77278 0.200195C1.99698 0.200195 2.21899 0.244174 2.42607 0.329612C2.63316 0.41505 2.82126 0.540269 2.9796 0.698096L23.4341 21.0353C23.5929 21.1927 23.7188 21.3797 23.8048 21.5856C23.8907 21.7915 23.9349 22.0122 23.9349 22.2351C23.9349 22.4581 23.8907 22.6788 23.8048 22.8847C23.7188 23.0906 23.5929 23.2776 23.4341 23.435L2.9796 43.7722C2.65953 44.0904 2.22542 44.2692 1.77278 44.2692C1.32013 44.2692 0.886027 44.0904 0.565959 43.7722C0.245891 43.454 0.066078 43.0224 0.066078 42.5723C0.066078 42.1223 0.245891 41.6906 0.565959 41.3724L19.8171 22.2351L0.565959 3.09788C0.407221 2.94045 0.281279 2.75343 0.195347 2.54754C0.109416 2.34164 0.0651855 2.12091 0.0651855 1.89799C0.0651855 1.67507 0.109416 1.45434 0.195347 1.24844C0.281279 1.04254 0.407221 0.855525 0.565959 0.698096Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_541_593">
                    <rect width="24" height="44.4706" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Box>
          </Box>
        )}
      >
        {images?.map((item) => (
          <Box
            key={item}
            component="figure"
            sx={{
              width: "100%",
              position: "relative",
              height: {
                md: "45rem",
                xs: "27.7rem",
              },
            }}
          >
            <img
              alt={item}
              src={item}
              style={{ height: "100%", width: "auto", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
