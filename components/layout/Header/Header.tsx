import React from "react";

import { useTheme } from "@/hooks/useTheme";
import { Avatar } from "@/components/general/Avatar/Avatar";
import { Navbar } from "../Navbar/Navbar";

import { Container, Span, Intro, MyDescription, AboutMeButton, Hello, Me } from "./styles";
import Link from "next/link";

const Header: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <Container isDark={isDark}>
      <Navbar />
      <Intro>
        <Me>
          <Hello>
            Hi, call me <Span>Ninah</Span>
          </Hello>
          <MyDescription>
            I&apos;m Software Dev from Brazil, but I’m living on Portugal. I learn, practice and share Web2, Web3
            content.
          </MyDescription>
          <AboutMeButton>
            <Link href="/about-me">
              <span>See about me</span> <Span>&gt;&gt;</Span>
            </Link>
          </AboutMeButton>
        </Me>
        <Avatar className="hidden md:block" isDark={isDark} />
      </Intro>
    </Container>
  );
};

export { Header };
