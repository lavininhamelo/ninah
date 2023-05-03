import React from "react";
import Link from "next/link";
import { Title, List, Item } from "./styles";
import { GradientBorderCard } from "@/components/ui";
interface PopularPost {
  title: string;
  page: string;
}

interface PopularPostsProps extends React.HTMLAttributes<HTMLDivElement> {
  posts: PopularPost[];
}

const PopularPosts: React.FC<PopularPostsProps> = ({ posts, className }) => {
  return (
    <GradientBorderCard color="greenBlue" className={className}>
      <Title>Popular Posts</Title>
      <List>
        {posts.map((post, index) => (
          <Item key={index}>
            <span>⇢</span> <Link href={"/post/" + post.page}>{post.title}</Link>
          </Item>
        ))}
      </List>
    </GradientBorderCard>
  );
};

export default PopularPosts;
