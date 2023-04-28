import Card from "@/components/ui/Card/Card";
import Image from "next/image";
import React from "react";
import tw, { styled } from "twin.macro";

export interface TechProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  name: string;
}

const Container = styled.div(() => tw`text-sm flex items-center h-6 w-full`);
const Text = styled.p(() => tw`ml-2 leading-4 text-sm`);

export const Tech: React.FC<TechProps> = ({ icon, name, ...props }) => {
  const iconSrc = `/icons/${icon}.png`;
  return (
    <Card padding="sm">
      <Container {...props}>
        <Image src={iconSrc} width={24} height={24} alt={name} />
        <Text>{name}</Text>
      </Container>
    </Card>
  );
};


