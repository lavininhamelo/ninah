import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTheme } from "@/hooks/useTheme";
import { Avatar } from "@/components/general";
import { Navbar } from "@/components/layout";
import { me } from "data/me";

import { Container, Span, Intro, MyDescription, AboutMeButton, Hello, Me } from "./styles";

const Header: React.FC = () => {
  const { isDark } = useTheme();

  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <Container isDark={isDark}>
      {!!isHome && <Navbar />}
      <Intro>
        <Me>
          <Hello>
            Hi, call me <Span>Ninah</Span>
          </Hello>
          <MyDescription>{me.shortDescription}</MyDescription>
          <Link href="/about-me">
            <AboutMeButton>
              <span>See about me</span> <Span>&gt;&gt;</Span>
            </AboutMeButton>
          </Link>
        </Me>
        <Avatar className="hidden md:block" isDark={isDark} />
      </Intro>
    </Container>
  );
};

export { Header };
