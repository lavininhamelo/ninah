import Image from "next/image";
import React, { MouseEvent } from "react";
import { useRouter } from "next/router";

import { ImageWrapper, Title, Date, GradientBar, Cover, Logo } from "./styles";
import { Card } from "@/components/ui";
import { Gradient } from "@/components/ui/Colors/Colors";
import { Avatar } from "@/components/general";

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  date: string;
  image?: string;
  gradient: Gradient;
  link: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, date, gradient, image, className, link, ...props }) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push(`/post/${link}`);
  };

  return (
    <Card onClick={handleClick} padding="none" className="mb-8" {...props}>
      <ImageWrapper>
        {image ? (
          <Image className="w-full h-auto" src={image} alt={"Post - " + title} width={0} height={0} />
        ) : (
          <Cover>
            <p>{props.subtitle || title}</p>
            <Logo>Ninah</Logo>
            <Avatar className="absolute bottom-[5%] right-[3%]" width={100} height={80} />
          </Cover>
        )}
      </ImageWrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <GradientBar className={Gradient(gradient)} />
    </Card>
  );
};

export default PostCard;
