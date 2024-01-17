import { NextPage } from "next";
import type { AppProps as NextAppProps } from "next/app";
import { NextRouter } from "next/router";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, router: NextRouter) => ReactNode;
  PageWrapper: (props: NextAppProps) => JSX.Element;
};

export type AppPropsWithLayout = NextAppProps & {
  Component: NextPageWithLayout;
  error: Error;
};
