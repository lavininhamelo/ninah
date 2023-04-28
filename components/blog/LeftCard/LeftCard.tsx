import React from "react";
import { CardContainer } from "./styles";
import { Icon } from "@/components/ui/Icon/Icon";
import Link from "next/link";
import { Gradient } from "@/components/ui/Colors/Colors";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  page: string;
  icon: string;
  gradient: Gradient;
  colorLight: string;
}

const LeftCard: React.FC<Props> = ({ title, page, icon, gradient, className, colorLight }) => {
  return (
    <Link href={"/" + page}>
      <CardContainer className={className} >
        <div className={'card ' + Gradient(gradient)}>
          <div className={"overlay " + colorLight }></div>
          <Icon type="outlined">{icon}</Icon>
          <p>{title}</p>
        </div>
      </CardContainer>
    </Link>
  );
};

export { LeftCard };