import { createSlice } from "@reduxjs/toolkit";

import { Product } from "@/types/product";
import { fetchProductDetailAsync } from "./thunks";

const initialState: ProductDetailSliceState = {
  data: null,
  status: "idle",
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetailAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductDetailAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })

      .addCase(fetchProductDetailAsync.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

/* Types */
export interface ProductDetailSliceState {
  data: Product | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}
