import * as React from "react";
import type { AppProps } from "next/app";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/system";

import "@/styles/globals.css";
import "@/styles/nprogress.css";

import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

// ** Loader Import
import { useRouter } from "next/router";

import { PersistGate } from "redux-persist/integration/react";

// import i18n (needs to be bundled ;))
// import '../../i18n';

import { Suspense, useEffect } from "react";
import NProgress from "nprogress";
import Head from "next/head";
import { CookiesProvider } from "react-cookie";
import configureStore, { persistor } from "@/hooks/store";
import Header from "@/components/header/header";

import lightTheme from "@/styles/theme/lightThemeOptions";
import Footer from "@/components/footer/footer";

// import { AppConfigGuard } from '@/components/appGuard/appConfigGuard';
//import i18n from '../../i18n';

require("dotenv").config();

NProgress.configure({ showSpinner: false });

interface SeoInterface {
  title: string;
  description: string;
  image: string;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  //console.log('pageProps', process.env?.NEXT_PUBLIC_DOMAIN)

  const seoData: { [lang: string]: SeoInterface } = {
    en: {
      title: "SingSing - Singing Socialfi Plarform",
      description:
        "SingSing (SING) is an innovative socialFi platform that combines singing, contest, virtual idol management, and blockchain technology. Users can earn rewards and compete directly on social media.",
      image: "https://singsing.net/assets/icons/favicon.jpg",
    },
    vi: {
      title: "SingSing - Singing Socialfi Plarform",
      description:
        "SingSing (SING) is an innovative socialFi platform that combines singing, contest, virtual idol management, and blockchain technology. Users can earn rewards and compete directly on social media.",
      image: "https://singsing.net/assets/icons/favicon.jpg",
    },
  };

  // useEffect(() => {

  // 	router.events.on('routeChangeStart', () => NProgress.start());
  // 	router.events.on('routeChangeComplete', () => NProgress.done());
  // 	router.events.on('routeChangeError', () => NProgress.done());

  // }, []);

  return (
    <Suspense fallback={""}>
      <Head>
        <title>SingSing - Singing Socialfi Plarform</title>
        <link rel="icon" href="/assets/icons/favicon.jpg" sizes="any" />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          property="og:title"
          content={
            pageProps?.title || router.locale == "vi"
              ? seoData.vi?.title
              : seoData.en.title
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://singsing.net" />
        <meta
          property="og:image"
          content={
            pageProps?.image || router.locale == "vi"
              ? seoData.vi?.image
              : seoData.en.image
          }
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content={
            pageProps?.description || router.locale == "vi"
              ? seoData.vi?.description
              : seoData.en.description
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="SingSing - Singing Socialfi Plarform" />
        <meta name="twitter:creator" content="@Singing Socialfi Plarform, Inc" />
        <meta
          name="twitter:title"
          content={
            pageProps?.title || router.locale == "vi"
              ? seoData.vi?.title
              : seoData.en.title
          }
        />
        <meta
          name="twitter:description"
          content={
            pageProps?.description || router.locale == "vi"
              ? seoData.vi?.description
              : seoData.en.description
          }
        />
        <meta
          name="twitter:image"
          content={
            pageProps?.image || router.locale == "vi"
              ? seoData.vi?.image
              : seoData.en.image
          }
        />
      </Head>

      <CookiesProvider>
        <Provider store={configureStore}>
          <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
              <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                {/* <AppConfigGuard> */}
                {/* Header */}
                <Header />
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    backgroundColor: "white",
                  }}
                >
                  <Component {...pageProps} />
                </Box>
                <Footer />
              </ThemeProvider>
            </SnackbarProvider>
          </PersistGate>
        </Provider>
      </CookiesProvider>
    </Suspense>
  );
};

export default MyApp;
