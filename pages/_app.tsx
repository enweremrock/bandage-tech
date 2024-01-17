import { AppPropsWithLayout } from "@/lib/app-provider";
import "@/styles/globals.css";

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;
  if (Component.PageWrapper !== undefined) return Component.PageWrapper(props);
  return <Component {...pageProps} />;
}
