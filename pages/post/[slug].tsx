import { useRouter } from "next/router";
import { useEffect } from "react";
import BaseLayout from "layout/BaseLayout";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  slug: string;
  article: any;
}

const Post: React.FC<Props> = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  function createMarkup() {
    return { __html: props.article.body_html };
  }

  useEffect(() => {
    console.log(slug, props.article.body_html);
  }, [slug]);

  return (
    <BaseLayout>
      <div className="flex flex-col items-center py-8 px-32 leading-10 ">
        <h1>{props.article.title}</h1>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </BaseLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "prod_MLH5Wy0Y97hDAC" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ params }) => {
  const { slug } = params;
  console.log(slug);

  const article = await fetch(`https://dev.to/api/articles/nataliedeweerd/${slug}`).then((res) => res.json());

  return {
    props: {
      slug,
      article,
    },
    revalidate: 60 * 1,
  };
};

export default Post;
