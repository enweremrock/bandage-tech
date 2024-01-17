import fetchJson from "@/lib/fetch-json";
import { createAppAsyncThunk } from "@/redux/create-async-thunk";
import { ProductResponse } from "@/types/product";

export const fetchAllProductAsync = createAppAsyncThunk(
  "products/fetchIdentityCount",
  async (query?: Record<string, string>) => {
    const queryString = new URLSearchParams(query);
    const endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?${queryString}`;
    const response = await fetchJson<ProductResponse>(endpoint, {
      method: "GET",
    });

    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);
