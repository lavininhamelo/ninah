import Image from "next/image";
import React from "react";
import tw, { styled } from "twin.macro";
import { Card }  from "@/components/ui";
import Link from "next/link";

export interface TechProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  name: string;
  link: string;
}

const Container = styled.div(() => tw`text-sm flex items-center h-6 w-full`);
const Text = styled.p(() => tw`ml-2 leading-4 text-sm`);

const Tech: React.FC<TechProps> = ({ icon, name, link, ...props }) => {
  const iconSrc = `/icons/${icon}.svg`;
  return (
    <Card padding="sm">
      <Link href={`/posts?tag=${link}`}>
      <Container {...props}>
        <Image src={iconSrc} width={24} height={24} alt={name} />
        <Text>{name}</Text>
      </Container>
      </Link>
    </Card>
  );
};
export default Tech;

