import React from "react";
import { ProjectCard } from "@/components/blog";
import { gradients } from "@/components/ui/Colors/Colors";
import { projects } from "data/projects";
import BaseLayout from "layout/BaseLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import tw, { styled } from "twin.macro";
export const Container = styled.div`${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8`}`;

const Project: React.FC = () => {
  return (
    <BaseLayout>
       <Head>
        <title>My Projects - Ninah</title>
      </Head>
      <h1>Projects</h1>
      <Container>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            gradient={gradients[index]}
            link={project.link}
          />
        ))}
      </Container>
    </BaseLayout>
  );
};

export async function getStaticProps({locale}: GetStaticPropsContext) {
  const TIME = 60 * 60 * 24 * 7;
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ["common"])),
    
    },
    revalidate: TIME,
  };
};

export default Project;
