import "styles/globals.css";
import "styles/fonts.css";

import type { AppProps } from "next/app";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { ThemeProvider} from "@/hooks/useTheme";

export type Props = AppProps & { session: SessionProviderProps["session"] };

export default function App({ Component, pageProps, session }: Props) {
  return (
    <ThemeProvider value="light">
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
