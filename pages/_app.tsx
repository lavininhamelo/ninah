import "styles/globals.css";
import "styles/fonts.css";

import prism from "prismjs";
import "dracula-prism/dist/css/dracula-prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";

import type { AppProps } from "next/app";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { ThemeProvider } from "@/hooks/useTheme";
import React, { useEffect } from "react";

export type Props = AppProps & { session: SessionProviderProps["session"] };

export default function App({ Component, pageProps, session }: Props) {
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
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
