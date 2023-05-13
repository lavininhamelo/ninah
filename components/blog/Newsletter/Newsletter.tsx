import React from "react";
import { Container, Heading, Title } from "./styles";
import { Button, Input } from "@/components/ui";
import { toast } from "react-toastify";

const Newsletter: React.FC = () => {
  const [email, setEmail] = React.useState({
    value: "",
    error: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value);
    if (!isEmailValid) {
      setEmail({
        value: email.value,
        error: "Please enter a valid email address.",
      });
      return;
    }

    try {
      const result = await fetch(`${process.env.APP_URL}/api/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.value }),
      });

      if (!result.ok) {
        throw new Error();
      }

      return toast.success("Subscribed successfully!");
    } catch (error) {
      toast.error("Error subscribing!");
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Heading>Follow the blog </Heading>
      <Title htmlFor="newsletter">Subscribe in my newsletter</Title>
      <Input
        className="w-full max-w-[400px]"
        name="newsletter"
        placeholder="Your e-mail address..."
        onChange={(e) => setEmail({ value: e.currentTarget.value, error: "" })}
        error={email.error}
      >
        <Button className="hidden md:block" type="submit">
          Newsletter
        </Button>
      </Input>
      <Button className="w-full bg-red max-w-[400px] block md:hidden mt-4" type="submit">
        Newsletter
      </Button>
    </Container>
  );
};

export default Newsletter;
