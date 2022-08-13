import "styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import Layout from "components/Layout/Layout";
import { basePath, nextAuthBasePath } from "lib/base-path";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Spotify</title>
        <link rel="shortcut icon" href={`${basePath}/favicon.ico`} type="image/x-icon" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          fontFamily: "Gotham-Medium",
        }}
      >
        <SessionProvider session={pageProps?.session} basePath={nextAuthBasePath}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </MantineProvider>
    </>
  );
}
