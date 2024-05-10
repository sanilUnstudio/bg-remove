import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import * as gtag from "../utils/gtag";
import { useEffect, useState } from "react";
import '@fontsource/poppins';
import '@fontsource-variable/inter';
// Supports weights 100-900
//import GoogleAnalytics from "@bradgarropy/next-google-analytics/dist/types/components/GoogleAnalytics";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const GTAG = process.env.NEXT_PUBLIC_GTAG_MEASUREMENT_ID;
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', '${GTAG}');`}
      </Script>

      <NextUIProvider>
        <Head></Head>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
