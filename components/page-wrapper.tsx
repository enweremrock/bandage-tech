import { AppPropsWithLayout } from "@/lib/app-provider";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { reduxStore } from "@/redux/store";
import { brandTheme } from "@/styles/muiTheme";

const persistor = persistStore(reduxStore);

const PageWrapper = (props: AppPropsWithLayout) => {
  const { Component, router, pageProps, error } = props;

  let pageStatus = "200";

  if (router.pathname === "404") {
    pageStatus = "404";
  } else if (router.pathname == "505") {
    pageStatus = "500";
  }

  // use the layout define at the top level
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={brandTheme}>
          <CssBaseline />

          <>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
              />
            </Head>
            <main className="main">
              {getLayout(<Component {...pageProps} err={error} />, router)}
            </main>
          </>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default PageWrapper;
