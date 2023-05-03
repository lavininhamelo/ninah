import Image from "next/image";
import React, { MouseEvent } from "react";
import { useRouter } from "next/router";

import { ImageWrapper, Title, Date, GradientBar } from "./styles";
import { Card } from "@/components/ui";
import { Gradient } from "@/components/ui/Colors/Colors";
import useTheme from "@/hooks/useTheme";

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  date: string;
  image: string;
  gradient: Gradient;
  link: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, date, gradient, image, className, link, ...props }) => {
  const router = useRouter();

  const {isDark} = useTheme()
  const imageUrl = isDark ? "images/default-dark.png" : "images/default.png";

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(`/post/${link}`);
  };

  return (
    <Card onClick={handleClick} padding="none" className="mb-8" {...props}>
      <ImageWrapper>
        <Image
          className="w-full !h-auto"
          src={imageUrl}
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

export default PostCard;
