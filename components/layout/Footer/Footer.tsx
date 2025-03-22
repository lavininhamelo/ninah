import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";

import { SocialNetworks } from "@/components/general";
import { Navbar } from "@/components/layout";
import { Container, Wrapper, Hr, Copy } from "./styles";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <Navbar />
      <Hr />
      <Wrapper>
        <SocialNetworks />
        <Copy>{t("footer.copy")} {currentYear}</Copy>
      </Wrapper>
    </Container>
  );
};

export { Footer };
