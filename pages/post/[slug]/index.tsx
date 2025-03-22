import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticPropsContext, GetStaticPropsResult } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import tw, { styled } from "twin.macro";

import BaseLayout from "layout/BaseLayout";
import service from "services";
import { Post as IPost } from "services/types";
import { AvailableLocales } from "data/posts";
interface Props {
  slug: string;
  article: {
    title: string;
    content: string;
  };
}

const Post: React.FC<Props> = ({ article }) => {
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      if (typeof window !== "undefined") {
      }
    };
    load();
  }, []);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <BaseLayout>
      <Head>
        <title>{"Ninah - " + article.title}</title>
        <meta property="og:title" content={article.title} />
      </Head>
      <Container>
        <h1>{article.title}</h1>
        {!!article.content && <PostArea dangerouslySetInnerHTML={{ __html: article.content }} />}
      </Container>
    </BaseLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const posts = service.getPostsList() || [];

  const paths = posts.flatMap((post: IPost) =>
    locales?.map((locale: string) => ({
      params: { slug: post.slug },
      locale,
    })) || [{ params: { slug: post.slug } }]
  );

  return {
    paths,
    fallback: false,
  };
};


export async function getStaticProps({
  params,
  locale,
}: GetStaticPropsContext<{ slug: string }>): Promise<GetStaticPropsResult<Props>> {
  const { slug } = params!;

  const post = await service.getPostBySlug(slug, locale as AvailableLocales);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const REVALIDATE_TIME = 60 * 60 * 24 * 7; // 7 days

  return {
    props: {
      slug,
      article: {
        title: post.title,
        content: post.content || "<p> Sorry! This post is not available... </p>",
      },
    },
    revalidate: REVALIDATE_TIME,
  };
}

export default Post;

const Container = styled.div`
  ${tw`flex flex-col self-center items-center max-w-[1000px] mt-8`}
`;

const PostArea = styled.article`
  & > h1 {
    ${tw`text-2xl font-bold`}
  }

  & > p {
    ${tw`text-base leading-[2rem]`}

    & > code:only-child {
      ${tw`bg-gray-100 dark:bg-light1 px-4 py-3 rounded-md`}
    }

    & > code:nth-child(n + 2) {
      ${tw`text-blue-500 bg-gray-100 dark:bg-light1 px-2 py-1 rounded-md`}
    }
  }

  & a {
    ${tw`text-primary font-bold`}
  }

  table {
    ${tw`border-collapse`}
  }

  th,
  td {
    ${tw`border border-gray-400 px-4 py-2`}
  }

  thead {
    ${tw`bg-gray-100 dark:bg-light1`}
  }

  tbody {
    ${tw`bg-light`}
  }

  tr {
    ${tw`hover:bg-light bg-light1`}
  }

  & > ul {
    ${tw`list-disc ml-8`}
  }

  & > ol {
    ${tw`list-decimal ml-8`}
  }

  & > li {
    ${tw`mb-2`}
  }

  & > h2 {
    ${tw`text-xl font-bold mb-4 mt-6`}
  }

  & > h3 {
    ${tw`text-lg font-bold mb-4 mt-6`}
  }

  & > h4 {
    ${tw`text-lg font-bold mb-4 mt-6`}
  }

  & > h5 {
    ${tw`text-base font-bold mb-4 mt-6`}
  }

  & > h6 {
    ${tw`text-base font-bold mb-4 mt-6`}
  }

  & > hr {
    ${tw`my-10`}
  }
`;

export { PostArea };
