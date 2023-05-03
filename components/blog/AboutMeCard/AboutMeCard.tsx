import React from "react";
import { Name, Title, Description, MyPhoto, Link } from "./styles";
import { SocialNetworks } from "@/components/general";
import { Button, GradientBorderCard } from "@/components/ui";
import { me } from "data/me";

const AboutMeCard: React.FC = (rest) => {
  return (
    <GradientBorderCard color="redYellow" {...rest}>
      <Link href="/about-me">
        <MyPhoto src="/images/me.jpeg" alt="My photo" />
        <Name>Lavínia Melo</Name>
        <Title>Senior Software Engineer</Title>
        <Description>{me.shortDescription}</Description>
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

export default AboutMeCard;
