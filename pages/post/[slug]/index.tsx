import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { PostArea } from "./styles";
import BaseLayout from "layout/BaseLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import prism from "prismjs";
import Head from "next/head";

interface Props {
  slug: string;
  article: {
    title: string;
    body_html: string;
    body: {
      __html: string;
    }
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
      <div className="flex flex-col items-center py-8 px-32 leading-10 w-full">
        <h1>{article.title}</h1>
        <PostArea dangerouslySetInnerHTML={article.body} />
      </div>
    </BaseLayout>
  );
};

function replacePreClass(str: string) {
  return {
    __html: str.replace(/<pre class="highlight\s*(\w+)">/g, '<pre class="language-$1 line-numbers">')
  };
}



export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "prod_MLH5Wy0Y97hDAC" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ params }) => {
  const { slug } = params;

  const article = await fetch(`http://localhost:3000/api/devto/posts/${slug}`).then((res) => res.json());

  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      slug,
      article: {
        ...article,
        body: replacePreClass(article.body_html),
      }
    },
    revalidate: 60 * 1,
  };
};

export default Post;
