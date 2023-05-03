import React from "react";
import BaseLayout from "layout/BaseLayout";
import { SocialNetworks } from "@/components/general";
import { Stack } from "@/components/blog";

import { databases, others, techs } from "data/stack";
import { works } from "data/work";
import { me } from "data/me";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import Head from "next/head";

import tw, { styled } from "twin.macro";

export const Hello = styled.h2(() => tw`text-center lg:text-left text-4xl font-bold mt-4`);
export const Span = styled.span(() => tw`text-primary dark:text-primary font-bold`);
export const Subtitle = styled.h3(() => tw`text-2xl font-bold mt-16`);
export const SessionTitle = styled.h3(() => tw`text-base my-4`);
export const SessionItems = styled.div(() => tw`w-full flex flex-wrap max-w-[800px]`);

export const AboutMeContainer = styled.div(() => tw`w-full flex flex-wrap-reverse justify-between`);
export const AboutMeParagraph = styled.p(() => tw`leading-7 text-sm mt-8`);
export const AboutMeLeft = styled.div(() => tw`w-full lg:w-8/12`);
export const AboutMeRight = styled.div(() => tw`w-full lg:w-4/12 flex flex-col justify-center items-center`);
export const MyPhoto = styled.img(() => tw`rounded-full max-w-[200px] lg:max-w-[300px] mt-4`);
export const MyName = styled.h1(() => tw`mt-4 text-xl font-light`);

export const WorkContainer = styled.div(() => tw`flex flex-col w-full lg:w-8/12 mt-8`);
export const Company = styled.section(() => tw`mb-16`);
export const CompanyHeader = styled.h2`
  ${tw`text-lg font-semibold mr-2`}
`;
export const CompanyName = styled.span`
  ${tw`text-lg text-primary font-semibold`}
`;
export const CompanyDate = styled.div`
  ${tw`flex items-center h-8 italic`}
`;
export const CompanyDescription = styled.div`
  ${tw`text-sm italic dark:text-gray-400`}
`;
export const CompanyAction = styled.li`
  ${tw`py-1`}
`;
export const CompanyTech = styled.li`
  ${tw`py-1 border px-3 rounded-md`}
`;

const AboutMe: React.FC = () => {
  return (
    <BaseLayout>
      <Head>
        <title>About Me - Ninah</title>
      </Head>
      <Hello>
        Hi, call me <Span>Ninah</Span>
      </Hello>
      <AboutMeContainer>
        <AboutMeLeft>
          {me.longDescription.map((p, index) => (
            <AboutMeParagraph key={index}>{p}</AboutMeParagraph>
          ))}
        </AboutMeLeft>
        <AboutMeRight>
          <MyPhoto src="/images/me.jpeg" alt="My photo" />
          <MyName>Lavínia Melo</MyName>
          <SocialNetworks />
        </AboutMeRight>
      </AboutMeContainer>

      <Subtitle>My Stack</Subtitle>
      <SessionTitle>Languages and Frameworks</SessionTitle>
      <SessionItems>
        {techs.map((tech) => (
          <Stack key={tech.name} {...tech} />
        ))}
      </SessionItems>
      <SessionTitle>Database</SessionTitle>
      <SessionItems>
        {databases.map((tech) => (
          <Stack key={tech.name} {...tech} />
        ))}
      </SessionItems>
      <SessionTitle>Tools and Tecnologies</SessionTitle>
      <SessionItems>
        {others.map((tech) => (
          <Stack key={tech.name} {...tech} />
        ))}
      </SessionItems>
      <Subtitle>Work Experience</Subtitle>

      <WorkContainer>
        {works.map((company) => (
          <Company key={company.name}>
            <CompanyHeader>
              {company.role}
              <CompanyName>{company.name}</CompanyName>
            </CompanyHeader>

            <CompanyDate>
              <p>{company.startDate}</p> <p className="mx-2"> - </p> <p>{company.endDate}</p>
            </CompanyDate>

            <CompanyDescription>
              <p>{company.description}</p>
            </CompanyDescription>

            <ul>
              {company.actions.map((action) => (
                <CompanyAction key={action}>
                  <span className="text-primary mr-2">⇢ </span> {action}
                </CompanyAction>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-4 mt-4">
              {company.techs.map((tech) => (
                <CompanyTech key={tech}>{tech}</CompanyTech>
              ))}
            </ul>
          </Company>
        ))}
      </WorkContainer>
    </BaseLayout>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const TIME = 60 * 60 * 24 * 30;
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
    revalidate: TIME,
  };
}

export default AboutMe;
