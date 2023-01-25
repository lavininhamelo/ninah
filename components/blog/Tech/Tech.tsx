import Image from "next/image";
import React from "react";
import tw, { styled } from "twin.macro";

export interface TechProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  name: string;
}

export const Tech: React.FC<TechProps> = ({ icon, name, ...props }) => {
  const iconSrc = `/icons/${icon}.png`;
  return (
    <Container {...props}>
      <Image src={iconSrc} width={30} height={30} alt={name} />
      <p className="ml-2 leading-4">{name}</p>
    </Container>
  );
};

const Container = styled.div(() => tw`
    dark:border-[rgba(255,255,255,.05)]
    dark:bg-[rgba(180,150,255,0.05)]
    hover:dark:bg-[rgba(180,150,255,.08)]
    hover:shadow-lg
    text-sm flex items-center px-4 border border-solid border-gray-200  h-12 rounded w-full`)