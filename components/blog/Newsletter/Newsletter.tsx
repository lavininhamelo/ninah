import React from "react";
import { Container, Heading, Title } from "./styles";
import { Button, Input } from "@/components/ui";

const Newsletter: React.FC = () => {
  return (
    <Container>
      <Heading>Follow the blog </Heading>
      <Title>Subscribe in my newsletter</Title>
      <Input className="w-full bg-red max-w-[400px]" name="newsletter" placeholder="Your e-mail address...">
        <Button className="hidden md:block">Newsletter</Button>
      </Input>
      <Button className="w-full bg-red max-w-[400px] block md:hidden mt-4">Newsletter</Button>
    </Container>
  );
};

export default Newsletter;
