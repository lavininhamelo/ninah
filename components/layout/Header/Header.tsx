
import React from "react";

import {Avatar} from "@/components/general/Avatar/Avatar";
import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "../Navbar/Navbar";


import { Container, Span, Intro, MyDescription, AboutMeButton, Hello, Me } from "./styles";

const Header: React.FC = () => {
  const { isDark} = useTheme();

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
            <span>See about me</span> <Span>&gt;&gt;</Span>
          </AboutMeButton>
        </Me>
        <Avatar className="hidden md:block" isDark={isDark} />
      </Intro>
    </Container>
  );
};

export { Header };
