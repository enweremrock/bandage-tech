import { truncate } from "@/lib/truncate";
import {
  fetchAllProductAsync,
  productSelector,
  useDispatch,
  useSelector,
} from "@/redux";
import { Product } from "@/types/product";
import { Box, Button, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ProductSkeleton } from "../product-skeleton";

type FeaturedItemProps = {
  showMore?: boolean;
  page?: string;
};

type PaginationProps = {
  currentPage: number;
  limit: number;
  skip: number;
  hasNext: boolean;
};

export const FeaturedItem = ({ showMore = true, page }: FeaturedItemProps) => {
  const dispatch = useDispatch();
  const products = useSelector(productSelector);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [pagination, setPagination] = useState<PaginationProps>({
    currentPage: 1,
    limit: 10,
    skip: 0,
    hasNext: true,
  });

  const totalPages = Math.ceil(
    products.paginatedProduct.total / pagination.limit
  );

  useEffect(() => {
    if (inView) {
      dispatch(
        fetchAllProductAsync({
          skip: `${pagination.skip}`,
          limit: `${pagination.limit}`,
        })
      );
    }
  }, [dispatch, inView, pagination.limit, pagination.skip]);

  const handleLoadMore = (page: number) => {
    const nextPage = (page - 1) * pagination.limit;
    setPagination((prev) => ({ ...prev, currentPage: page, skip: nextPage }));
  };

  const showNextPage = () => {
    const numberOfPages = Math.ceil(
      products?.paginatedProduct?.total / pagination.limit
    );

    // setPagination(prev => ({ ...prev, skip: }))
  };
  const isProduct = page === "product";

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        display: {
          md: "block",
          xs: page === "product" ? "none" : "block",
        },
        // height: {
        //   md: "124.1rem",
        // },
      }}
    >
      <Box
        sx={{
          padding: {
            md: "0px 12.1rem 0px 19.5rem",
            xs: "0px 35.5px;",
          },

          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: {
              md: "112.4rem",
            },
            mx: "auto",
            padding: page === "home" ? "80px 0px" : 0,
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            height: "100%",
          }}
        >
          {!isProduct && <FeaturedItemHeader />}

          <Box sx={{ padding: "2.4rem", width: "100%" }}>
            {isProduct && (
              <>
                <Typography variant="h3" color="text.primary">
                  BESTSELLER PRODUCTS
                </Typography>
                <hr
                  style={{ backgroundColor: "#ECECEC", marginBlock: "2.4rem" }}
                />
              </>
            )}

            <ItemCollection
              data={products.paginatedProduct.products}
              status={products.status}
            />
          </Box>

          {showMore && (
            <>
              {totalPages !== pagination.currentPage && totalPages && (
                <Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleLoadMore(pagination.currentPage + 1)}
                    sx={{
                      padding: "15px 40px",
                      fontWeight: 700,
                      borderRadius: "5px",
                    }}
                  >
                    LOAD MORE PRODUCTS
                  </Button>
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

type FeaturedItemHeaderProps = {
  title?: string;
  showFeatureTitle?: boolean;
};

export const FeaturedItemHeader = ({
  title = "BESTSELLER PRODUCTS",
  showFeatureTitle,
}: FeaturedItemHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        //  width: "69.1rem",
        width: {
          md: "69.1rem",
          xs: "30rem",
        },

        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Typography
        variant="h4"
        color="text.secondary"
        sx={{
          display: {
            md: "inline-block",
            xs: showFeatureTitle ? "inline-block" : "none",
          },
        }}
      >
        Featured Products
      </Typography>
      <Typography
        variant="h3"
        color="text.primary"
        sx={{ textAlign: "center" }}
      >
        {title}
      </Typography>
      <Typography
        color="text.secondary"
        variant="body1"
        sx={{ textAlign: "center" }}
      >
        Problems trying to resolve the conflict between{" "}
      </Typography>
    </Box>
  );
};

type ItemCollectionProps = {
  data: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
};
const ItemCollection = ({ data, status }: ItemCollectionProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        rowGap: {
          md: "1.5rem",
          xs: "3rem",
        },
        columnGap: "3rem",
        flexWrap: "wrap",
        flexDirection: {
          md: "row",
          xs: "column",
        },
      }}
    >
      {status === "loading" &&
        Array.from(new Array(6)).map((item) => <ProductSkeleton key={item} />)}
      {status === "succeeded" && (
        <>
          {data.map((item) => (
            <ProductCard item={item} key={`${item.title}-${item.id}`} />
          ))}
        </>
      )}
    </Box>
  );
};

type ProductCardProps = {
  item: Product;
  sx?: SxProps;
};

export const ProductCard = ({ sx, item }: ProductCardProps) => {
  const dispatch = useDispatch();
  return (
    <Box
      component={Link}
      href={`/product/${item.id}`}
      sx={{
        flexBasis: {
          md: "18.3rem",
          xs: "29.5rem",
        },
        // maxWidth: {
        //   md: "18.3rem",
        // },

        height: "40rem",
        maxHeight: "40rem",
        position: "relative",

        // overflow: "hidden",
        ...sx,
      }}
    >
      <Box
        sx={{ position: "relative", width: "100%", height: "23.8rem" }}
        component="figure"
      >
        <Image
          src={item.thumbnail}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </Box>
      <Box
        pt="25px"
        pb="35px"
        sx={{
          display: "flex",
          width: "100%",
          // padding: "25px 25px 35px 25px",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          // alignSelf: "stretch",
        }}
      >
        <Typography
          variant="h5"
          color="text.primary"
          textAlign="center"
          sx={{
            display: "inline-block",
          }}
        >
          {truncate(item.title, 18, "...")}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          // sx={{ fontSize: "1.4rem" }}
        >
          {item.category}
        </Typography>
        <Typography
          variant="h5"
          color="text.main"
          sx={{
            display: "flex",
            padding: "5px 3px",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Box component="span" sx={{ color: "#BDBDBD" }}>
            ${item.price}
          </Box>
          <Box component="span" color="success.dark">
            ${item.price}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};
