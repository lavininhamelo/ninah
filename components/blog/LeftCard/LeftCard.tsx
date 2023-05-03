import React from "react";
import Link from "next/link";
import { CardContainer } from "./styles";
import { Icon } from "@/components/ui";
import { Gradient, Color, BackgroundColor } from "@/components/ui/Colors/Colors";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  page: string;
  icon: string;
  gradient: Gradient;
  colorLight: Color;
}

const LeftCard: React.FC<Props> = ({ title, page, icon, gradient, className, colorLight }) => {
  return (
    <Link href={"/" + page}>
      <CardContainer className={className} >
        <div className={'card ' + Gradient(gradient)}>
          <div className={"overlay " + BackgroundColor(colorLight) }></div>
          <Icon type="outlined">{icon}</Icon>
          <p>{title}</p>
        </div>
      </CardContainer>
    </Link>
  );
};

export default LeftCard;