import { createSlice } from "@reduxjs/toolkit";

import { ProductResponse } from "@/types/product";
import uniqBy from "lodash/uniqBy";
import { fetchAllProductAsync } from "./thunks";

const initialState: ProductSliceState = {
  paginatedProduct: { products: [], skip: 0, limit: 0, total: 1 },
  status: "idle",
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

        state.paginatedProduct.products = uniqBy(newProducts, "id");

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
