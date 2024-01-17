// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of

import { ReduxState } from "@/redux";

// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const cartSelector = (state: ReduxState) => state.cart;
