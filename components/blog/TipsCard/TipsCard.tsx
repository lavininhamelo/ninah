import React, { MouseEvent } from "react";
import { useRouter } from "next/router";

import { Title, GradientBar } from "./styles";
import { Card }  from "@/components/ui";
import { Gradient } from "@/components/ui/Colors/Colors";

interface TipsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  index: number;
  gradient: Gradient;
  link: string;
}

const TipsCard: React.FC<TipsCardProps> = ({ title, gradient, index, className, link, ...props }) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(`/tip/${link}`);
  };

  return (
    <Card onClick={handleClick} padding="none" className="mb-8 pt-4" {...props}>
      <Title>{title}</Title>
      <GradientBar className={Gradient(gradient)} />
    </Card>
  );
};

export default TipsCard;