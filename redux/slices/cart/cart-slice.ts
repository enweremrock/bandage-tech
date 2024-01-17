import { createSlice } from "@reduxjs/toolkit";
import { cart } from "../utils";

export type CartItemProps = {
  image: string;
  quantity: number;
  price: number;
  title: string;
  category: string;
  id: number;
  totalPrice: number;
};

const initialState: CartItemProps[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      cart.addToCart(action.payload, state);
    },
    decreaseQuantity: (state, action) => {
      cart.decreaseQuantity(action.payload, state);
    },
    removeFromCart: (state, action) => {
      cart.removeFromCart(action.payload, state);
    },
  },
});
