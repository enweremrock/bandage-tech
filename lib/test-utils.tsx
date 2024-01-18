import { ReduxStore } from "@/redux";
import { Provider } from "react-redux";

export const ReduxProvider = ({
  children,
  reduxStore,
}: {
  children: React.ReactNode;
  reduxStore: ReduxStore;
}) => <Provider store={reduxStore}>{children}</Provider>;
