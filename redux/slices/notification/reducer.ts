type initialDataProp = {
  open: boolean;
  message: string;
  type: string;
};

const initialData: initialDataProp = {
  open: false,
  message: "",
  type: "",
};

export const alertReducer = (
  state = initialData,
  action = { payload: {}, type: "" }
) => {
  switch (action?.type) {
    case "OPEN_ALERT":
      return {
        ...state,
        open: true,
        message: "good",
        type: "success",
      };

    default:
      return state;
  }
};
export default alertReducer;
