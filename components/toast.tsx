import { toastSlice, useDispatch, useSelector } from "@/redux";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

export const Toast = ({
  open,
  message,
}: {
  open: boolean;
  message: string;
}) => {
  const state = useSelector((state) => state.toaster);
  const dispatch = useDispatch();

  console.log("all state", state);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(toastSlice.actions.hideToast());
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity="success" sx={{ width: "100%", color: "#fff" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
