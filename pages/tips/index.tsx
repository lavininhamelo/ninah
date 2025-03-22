import { TipsCard } from "@/components/blog";
import { gradients } from "@/components/ui/Colors/Colors";
import BaseLayout from "layout/BaseLayout";
import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

const Tips: React.FC = () => {
  let tips: any = [];

  return (
    <BaseLayout>
      <Head>
        <title>Tips - Ninah</title>
      </Head>
      <h1>Tips</h1>
      {tips.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:gap-8 mb-8">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TipsCard
              key={index}
              title="Lorem ipsum dolor sit amet cons ectetur adipi"
              gradient={gradients[index]}
              index={1}
              link="teste"
            />
          ))}
        </div>
      ) : (
        <div className="mb-8">Nothing here... for now.</div>
      )}
    </BaseLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const TIME = 60 * 60 * 24;
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
    revalidate: TIME,
  };
}

export default Tips;
