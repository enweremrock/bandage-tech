import {
  cartSlice,
  productDetailSlice,
  productSlice,
  toastSlice,
  wishlistSlice,
} from "./slices";

export const reducer = {
  products: productSlice.reducer,
  cart: cartSlice.reducer,
  wishlist: wishlistSlice.reducer,
  product: productDetailSlice.reducer,
  toaster: toastSlice.reducer,
};
