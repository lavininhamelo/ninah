import React from "react";
import Card from "../Card/Card";
import tw, { styled } from "twin.macro";
import { Gradient } from "../Colors/Colors";



const Border = styled.div`
  ${tw`bg-gradient-to-b w-full p-1 rounded-md`}
`;

const Container = styled.section`
  ${tw`rounded-sm p-4 bg-light1`}
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color: Gradient
}

const GradientBorderCard: React.FC<Props> = ({ className, color, children, ...rest }) => {
  return (
    <Card padding="none" className={className} {...rest}>
      <Border className={Gradient(color)}>
        <Container>{children}</Container>
      </Border>
    </Card>
  );
};

export default GradientBorderCard;
