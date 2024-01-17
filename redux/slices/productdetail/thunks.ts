import fetchJson from "@/lib/fetch-json";
import { createAppAsyncThunk } from "@/redux/create-async-thunk";
import { Product } from "@/types/product";

export const fetchProductDetailAsync = createAppAsyncThunk(
  "productDetail/fetchProductDetail",
  async (productId: string) => {
    const endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${productId}`;

    const response = await fetchJson<Product>(endpoint, {
      method: "GET",
    });

    return response;
  }
);
