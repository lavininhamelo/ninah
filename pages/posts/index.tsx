import Card from "@/components/ui/Card/Card";
import { Color, Gradient, TextColor, colors, gradients } from "@/components/ui/Colors/Colors";
import BaseLayout from "layout/BaseLayout";
import React from "react";
import tw, { styled } from "twin.macro";

type Post = {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  category?: string;
};

type MyPostsList = {
  year: number;
  posts: Post[];
};

const postsList: MyPostsList[] = [
  {
    year: 2022,
    posts: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget tortor vel felis viverra mattis",
        slug: "post-1",
        date: "2022-01-01",
        description: "Post 1 description",
        tags: ["node", "react", "javascript", "vue"],
        category: "category1",
      },
    ],
  },
  {
    year: 2023,
    posts: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        slug: "post-a",
        date: "2022-01-01",
        description: "Post A description",
        tags: ["node", "react", "javascript", "vue"],
        category: "categoryA",
      },
      {
        title: "Donec suscipit iaculis dui, sed commodo tortor posuere at",
        slug: "post-b",
        date: "2022-01-01",
        description: "Post B description",
        tags: ["node", "react"],
        category: "categoryB",
      },
      {
        title: "Integer vitae odio scelerisque, semper diam in",
        slug: "post-c",
        date: "2022-01-01",
        description: "Post C description",
        tags: ["javascript", "vue"],
        category: "categoryC",
      },
    ],
  },
];

const Year = styled.p`
  ${tw`text-4xl font-bold mb-4`}
`;

const PostContainer = styled.div`
  ${tw`flex mt-4 flex-wrap w-full justify-between`}
`;

const PostName = styled.h2`
  ${tw`text-xl font-semibold mt-2  w-full md:w-9/12 `}
`;

const PostDate = styled.p`
  ${tw`w-2/12 min-w-[100px] text-sm mt-3`}
`;

const PostTags = styled.div`
  ${tw`flex flex-wrap mt-2 w-full`}
`;

const Tag = styled.div`
  ${tw`bg-clip-text text-transparent mr-4 font-semibold`}
`;

const AllPosts: React.FC = () => {
  return (
    <BaseLayout>
      <h1>All Posts</h1>
        <section className="main mb-20">
          {postsList.map((list) => (
            <div key={list.year} className="mb-8">
              <Year>{list.year}</Year>
              {list.posts.map((post) => (
                <PostContainer key={post.slug}>
                  <PostName>{post.title}</PostName>
                  <PostDate>{post.date}</PostDate>
                  <PostTags>
                    {post.tags.map((tag, index) => (
                      <Tag key={tag} className={Gradient(gradients[index])}>
                        #{tag}
                      </Tag>
                    ))}
                  </PostTags>
                </PostContainer>
              ))}
            </div>
          ))}
        </section>
    </BaseLayout>
  );
};

export default AllPosts;
