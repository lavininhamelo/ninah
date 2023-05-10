import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import prism from "prismjs";
import { ToastContainer } from 'react-toastify';

import "dracula-prism/dist/css/dracula-prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "styles/globals.css";
import "../public/styles/fonts.css";
import 'react-toastify/dist/ReactToastify.css';


import { ThemeProvider } from "@/hooks/useTheme";

export type Props = AppProps & { session: SessionProviderProps["session"] };

const App = ({ Component, pageProps, session }: Props) => {
  useEffect(() => {
    const load = async () => {
      if (typeof window !== "undefined") {
        prism.highlightAll();
      }
    };
    load();
  }, []);

  return (
    <ThemeProvider value="light">
      <SessionProvider session={session}>
        <ToastContainer />
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}


export default appWithTranslation(App)