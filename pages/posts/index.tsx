import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import tw, { styled } from "twin.macro";
import React from "react";
import Link from "next/link";
import { Tag as TagSchema, Post as PostSchema } from "@prisma/client";
import { Gradient, gradients } from "@/components/ui/Colors/Colors";
import BaseLayout from "layout/BaseLayout";
import { getAllPosts, getPostsByCategory, getPostsByTag } from "services";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

type PostData = {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: {
    id: number;
    name: string;
    slug: string;
  }[];
  category?: string;
};

type MyPostsList = {
  year: number;
  posts: PostData[];
};

const Year = styled.p`
  ${tw`text-4xl font-bold mb-4`}
`;
const PostContainer = styled.div`
  ${tw`flex mt-4 flex-wrap w-full justify-between`}
`;
const PostName = styled.h2`
  ${tw`text-xl font-semibold mt-2 cursor-pointer w-full md:w-9/12 `}
`;
const PostDate = styled.p`
  ${tw`min-w-[100px] text-sm mt-3 cursor-pointer md:text-right`}
`;
const PostTags = styled.div`
  ${tw`flex flex-wrap mt-2 w-full`}
`;
const Tag = styled.div`
  ${tw`bg-clip-text text-transparent mr-4 font-semibold`}
`;

const TitleContainer = styled.div`
  ${tw`flex justify-between items-center`}
`;

const AllPosts: React.FC<{ postsList: MyPostsList[] }> = ({ postsList }) => {
  const router = useRouter();
  const hasQuery = router.query.tag || router.query.category;
  const title = hasQuery ? "Filtered Posts" : "All Posts";

  const handleClick = (slug: string) => {
    router.push(`/post/${slug}`);
  };


  return (

   

    <BaseLayout>
      <Head>
        <title>All Posts - Ninah</title>
      </Head>
      <TitleContainer>
        <h1>{title}</h1>
        {hasQuery && <Link href={"/posts"}>Clear all filters</Link>}
      </TitleContainer>

      <section className="main mb-20">
        {postsList.length > 0 ? (
          postsList.map((list) => (
            <div key={list.year} className="mb-8">
              <Year>{list.year}</Year>
              {list.posts.map((post) => (
                <PostContainer key={post.slug}>
                  <PostName onClick={() => handleClick(post.slug)}>{post.title}</PostName>
                  <PostDate onClick={() => handleClick(post.slug)}>{post.date}</PostDate>
                  <PostTags>
                    {post.tags.map((tag, index) => (
                      <Link key={tag.slug} href={`/posts?tag=${tag.slug}`}>
                        <Tag className={Gradient(gradients[index])}>#{tag.name}</Tag>
                      </Link>
                    ))}
                  </PostTags>
                </PostContainer>
              ))}
            </div>
          ))
        ) : (
          <p>Nothing here...</p>
        )}
      </section>
    </BaseLayout>
  );
};

export async function getServerSideProps(
  params: GetServerSidePropsContext<{
    tag?: string;
    category?: string;
  }>
): Promise<GetServerSidePropsResult<{ postsList: MyPostsList[] }>> {
  let posts: (PostSchema & {
    tags: TagSchema[];
  })[];

  if (params.query.tag && typeof params.query.tag === "string") {
    posts = await getPostsByTag(params.query.tag);
  } else if (params.query.category && typeof params.query.category === "string") {
    posts = await getPostsByCategory(params.query.category);
  } else {
    posts = await getAllPosts();
  }

  const postByYear: { [key: number]: PostData[] } = {};
  posts.forEach((post) => {
    const year = new Date(post.createdAt).getFullYear();

    if (!postByYear[year]) {
      postByYear[year] = [];
    }

    postByYear[year].push({
      title: post.title,
      slug: post.slug,
      date: new Date(post.createdAt).toLocaleDateString(),
      description: post.description || "",
      tags: post.tags,
    });
  });

  const postsList: MyPostsList[] = [];

  const years = Object.keys(postByYear).sort().reverse();
  for (const year of years) {
    postsList.push({
      year: Number(year),
      posts: postByYear[Number(year)],
    });
  }

  return {
    props: {
      ...(await serverSideTranslations(params.locale || "en", ["common"])),
      postsList,
    },
  };
}

export default AllPosts;
