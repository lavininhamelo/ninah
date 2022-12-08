import "styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

export type Props = AppProps & { session: SessionProviderProps["session"] };

export default function App({ Component, pageProps, session }: Props) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
