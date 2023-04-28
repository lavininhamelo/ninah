import React from "react";
import { Name, Title, Description, MyPhoto, Link } from "./styles";
import SocialNetworks from "@/components/general/SocialNetworks/SocialNetworks";
import Button from "@/components/ui/Button/Button";
import GradientBorderCard from "@/components/ui/GradientBorderCard/GradientBorderCard";

const AboutMeCard: React.FC = (rest) => {
  return (
    <GradientBorderCard color="redYellow" {...rest}>
      <Link href="/about-me">
        <MyPhoto src="/images/me.jpeg" alt="My photo" />
        <Name>Lavínia Melo</Name>
        <Title>Senior Software Engineer</Title>
        <Description>
          I&apos;m Software Dev from Brazil, but I’m living on Portugal. I learn, practice and share Web2, Web3 content.
        </Description>
      </Link>
      <div className="flex flex-col items-center">
        <SocialNetworks />
        <Link className="w-8/12 my-2" href="/about-me">
          <Button>See About Me</Button>
        </Link>
      </div>
    </GradientBorderCard>
  );
};

export { AboutMeCard };
