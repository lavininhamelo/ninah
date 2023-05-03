import React from "react";

import { InputContainer, InputField, Container, InputError } from "./styles";
interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  error?: string;
}

const Input: React.FC<Props> = ({ children, className, name, error = "", ...props }) => {
  return (
      <Container className={className}>
        <InputContainer>
          <label htmlFor={name}></label>
          <InputField name={name} type={props.type || "text"} {...props} />
          {children}
        </InputContainer>
        <InputError>{error}</InputError>
      </Container>
  );
};

export default Input;
