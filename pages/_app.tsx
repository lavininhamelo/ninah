import "styles/globals.css";

import type { AppProps } from "next/app";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { useEffect } from "react";

export type Props = AppProps & { session: SessionProviderProps["session"] };

export default function App({ Component, pageProps, session }: Props) {

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem("theme") !== "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [])

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
