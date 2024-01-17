import { createSlice } from "@reduxjs/toolkit";

export type ToastProps = {
  message: string;
  isOpen: boolean;
};

const initialState: ToastProps = {
  isOpen: false,
  message: "",
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload.message;
      state.isOpen = true;
    },

    hideToast: (state) => {
      state.message = "";
      state.isOpen = false;
    },
  },
});
