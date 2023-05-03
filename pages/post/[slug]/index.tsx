import React, { useEffect } from "react";
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import prism from "prismjs";
import tw, { styled } from "twin.macro";

import BaseLayout from "layout/BaseLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAllPosts, getPostBySlug } from "services";
interface Props {
  slug: string;
  article: {
    title: string;
    body: string;    
  };
}

const Post: React.FC<Props> = ({ slug, article }) => {
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      if (typeof window !== "undefined") {
        prism.highlightAll();
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
        {!!article.body && <PostArea dangerouslySetInnerHTML={{
          __html: article.body,
        }} />}
      </Container>
    </BaseLayout>
  );
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export async function getStaticProps({ params, locale }: GetStaticPropsContext<{ slug: string }>): Promise<GetStaticPropsResult<Props>> {
  const { slug } = params!;

  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const ONE_DAY = 60 * 60 * 24;

  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ["common"])),
      slug,
      article: {
        title: post.title,
        body: "<p> Sorry! This blog is under contruction... </p>"
      },
    },
    revalidate: ONE_DAY,
  };
};

export default Post;


const Container = styled.div`flex flex-col items-center py-8 px-32 leading-10 w-full`;

const PostArea = styled.div`
  & > h1 {
    ${tw`text-4xl font-bold`}
  }

  & > p {
    ${tw`text-lg leading-[3rem]`}

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
    ${tw`text-3xl font-bold mb-4 mt-6`}
  }

  & > h3 {
    ${tw`text-2xl font-bold mb-4 mt-6`}
  }

  & > h4 {
    ${tw`text-xl font-bold mb-4 mt-6`}
  }

  & > h5 {
    ${tw`text-lg font-bold mb-4 mt-6`}
  }

  & > h6 {
    ${tw`text-base font-bold mb-4 mt-6`}
  }
`;

export { PostArea, Container }
