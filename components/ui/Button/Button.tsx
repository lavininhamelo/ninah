import React from "react";
import { ButtonContainer } from "./styles";

const Button: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return <ButtonContainer className={props.className}>{props.children}</ButtonContainer>;
};

export default Button;
