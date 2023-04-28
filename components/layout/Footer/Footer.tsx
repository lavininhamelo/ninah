import React from "react";
import SocialNetworks from "@/components/general/SocialNetworks/SocialNetworks";
import { Navbar } from "../Navbar/Navbar";
import { Container, Wrapper, Hr, Copy } from "./styles";


const Footer: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Hr />
      <Wrapper>
        <SocialNetworks />
        <Copy>Designed and Developed by Ninah © 2023</Copy>
      </Wrapper>
    </Container>
  );
};

export default Footer;
