import React from "react";
import { Container, Heading, Title } from "./styles";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

export const Newsletter: React.FC = () => {
  return (
    <Container>
      <Heading>Follow the blog </Heading>
      <Title>Subscribe in my newsletter</Title>
      <Input className="w-full bg-red max-w-[400px]" name="newsletter" placeholder="Your e-mail address...">
        <Button className="hidden md:block">Newsletter</Button>
      </Input>
      <Button className="block md:hidden w-10/12 mt-4">Newsletter</Button>
    </Container>
  );
};
