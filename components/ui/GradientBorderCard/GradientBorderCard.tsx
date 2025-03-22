import React from "react";
import tw, { styled } from "twin.macro";
import { Card } from "@/components/ui";
import { Gradient } from "../Colors/Colors";

const Border = styled.div`
  ${tw`bg-gradient-to-b w-full p-1 rounded`}
`;

const Container = styled.section`
  ${tw`rounded p-4 bg-light1`}
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color: Gradient;
}

const GradientBorderCard: React.FC<Props> = ({ className = "", color, children, ...rest }) => {
  return (
    <Card padding="none" className={className + " !bg-opacity-100"} {...rest}>
      <Border className={Gradient(color)} >
        <Container>{children}</Container>
      </Border>
    </Card>
  );
};

export default GradientBorderCard;
