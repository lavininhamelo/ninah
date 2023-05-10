import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <ButtonContainer className={className} {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
