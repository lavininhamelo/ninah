import React from "react";
import { useTranslation } from "next-i18next";

import { SocialNetworks } from "@/components/general";
import { Navbar } from "@/components/layout";
import { Container, Wrapper, Hr, Copy } from "./styles";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Navbar />
      <Hr />
      <Wrapper>
        <SocialNetworks />
        <Copy>{t("footer.copy")}</Copy>
      </Wrapper>
  
    </Container>
  );
};

export { Footer };
