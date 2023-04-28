import Image from "next/image";
import React, { MouseEvent } from "react";

import { ImageWrapper, Title, Date, GradientBar } from "./styles";
import { useRouter } from "next/router";
import Card from "@/components/ui/Card/Card";
import { Gradient } from "@/components/ui/Colors/Colors";

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  tags: string[];
  date: string;
  index: number;
  gradient: Gradient;
  link: string;
}

export const PostCard: React.FC<PostCardProps> = ({ title, tags, date, gradient, index, className, link, ...props }) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(`/post/${link}`);
  };

  return (
    <Card onClick={handleClick} padding="none" className="mb-8" {...props}>
      <ImageWrapper>
        <Image
          className="w-full !h-auto"
          src={`/images/covers/cover${index}.jpeg`}
          alt={"Post - " + title}
          width={0}
          height={0}
        />
      </ImageWrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <GradientBar className={Gradient(gradient)} />
    </Card>
  );
};
