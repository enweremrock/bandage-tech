import { createSlice } from "@reduxjs/toolkit";

import { Product, ProductResponse } from "@/types/product";
import { fetchAllProductAsync } from "./thunks";

const initialState: ProductSliceState = {
  paginatedProduct: { products: [], skip: 0, limit: 0, total: 1 },
  status: "idle",
};

const uniqByAarr = (arr1: Product[], arr2: Product[]) => {
  const mergedSet = new Set(
    [...arr1, ...arr2].map((item) => JSON.stringify(item))
  );
  const mergedArray = Array.from(mergedSet).map((item) => JSON.parse(item));
  return mergedArray;
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = "succeeded";

        let newProducts = [
          ...state.paginatedProduct.products,
          ...action.payload.products,
        ];

        state.paginatedProduct.products = uniqByAarr(
          state.paginatedProduct.products,
          action.payload.products
        );

        state.paginatedProduct.total = action.payload.total;
      })

      .addCase(fetchAllProductAsync.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

/* Types */
export interface ProductSliceState {
  paginatedProduct: ProductResponse;
  status: "idle" | "loading" | "succeeded" | "failed";
}
