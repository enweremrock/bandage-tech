import { createSlice } from "@reduxjs/toolkit";
import { CartItemProps } from "..";

const initialState: CartItemProps[] = [];

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (index === -1) {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});
