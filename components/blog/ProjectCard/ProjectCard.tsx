import React from "react";
import tw, { styled } from "twin.macro";

import { Card } from "@/components/ui";
import { Gradient } from "@/components/ui/Colors/Colors";
import { Project } from "data/projects";

const Title = styled.h2`
  ${tw`font-semibold pb-3 pt-2 px-6`}
`;

const Description = styled.p`
  ${tw`px-6 pb-6 text-sm h-full`}
`;

const GradientBar = styled.div`
  ${tw`h-[5px] rounded rounded-t-none bg-gradient-to-r`}
`;

type ProjectCardProps = React.HTMLAttributes<HTMLDivElement> &
  Project & {
    gradient: Gradient;
  };

const ProjectCard: React.FC<ProjectCardProps> = ({ title, gradient, description, className, link, ...props }) => {
  return (
    <Card onClick={() => window.open(link, "_blank")} padding="none" className="mb-8 pt-4" {...props}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <GradientBar className={Gradient(gradient)} />
    </Card>
  );
};

export default ProjectCard;
