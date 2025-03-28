import Head from "next/head";
import tw, { styled } from "twin.macro";

import HomeLayout from "layout/HomeLayout";
import { Tech, AboutMeCard, LeftCard, PopularPosts, PostCard } from "@/components/blog";
import { gradients } from "@/components/ui/Colors/Colors";
import { techs } from "data/techs";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { Post } from "services/types";
import service from "services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AvailableLocales } from "data/posts";

const Container = styled.div`
  ${tw`w-full h-full`}
`;
const Subtitle = styled.h2`
  ${tw`text-2xl font-semibold mb-8 w-full`}
`;
const Main = styled.main`
  ${tw`md:w-4/12 min-w-[260px]`}
`;
const Aside = styled.aside`
  ${tw`grid grid-cols-2 gap-4`}
`;
const TechsContainer = styled.div`
  ${tw`mt-8 gap-2 flex-wrap grid mb-8 xl:px-0 grid-cols-2 md:grid-cols-4 lg:grid-cols-5`}
`;
const LatestPostsContainer = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 w-full gap-y-8 md:gap-4 mb-16`}
`;
const PostsContainer = styled.div`
  ${tw`flex-1 md:pr-10`}
`;
const ContentContainer = styled.div`
  ${tw`flex flex-col md:flex-row flex-wrap`}
`;

interface Props {
  postsList: Post[];
}

const Home: React.FC<Props> = ({ postsList }) => {
  const posts = postsList;

  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Ninah&apos;s Blog</title>
        <meta name="author" content="Lavínia Melo" />
        <meta name="designer" content="Lavínia Melo" />
        <meta name="developer" content="Lavínia Melo" />
        <meta name="description" content="Ninah's Blog - Insights on Software Development, Engineering, and Technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <HomeLayout>
        <TechsContainer>
          {techs.map((tech, index) => (
            <Tech key={index} {...tech} />
          ))}
        </TechsContainer>
        <Subtitle>Latest Posts</Subtitle>
        <LatestPostsContainer>
          {posts.slice(0, 3).map((post, index) => (
            <PostCard
              key={post.slug}
              gradient={gradients[index]}
              link={post.slug}
              title={post.title}
              image={post.image}
              date={post.date}
              subtitle={post.subtitle}
            />
          ))}
        </LatestPostsContainer>
        <ContentContainer>
          <Subtitle>Posts</Subtitle>
          <PostsContainer>
            {posts.map((post, index) => (
              <PostCard
                key={post.slug}
                className="mb-8"
                gradient={gradients[index]}
                link={post.slug}
                title={post.title}
                image={post.image}
                date={post.date}
                subtitle={post.subtitle}
              />
            ))}
          </PostsContainer>
          <Main>
            <AboutMeCard />
            <PopularPosts
              className="my-6"
              posts={posts.map((post) => ({
                title: post.title,
                page: post.slug,
              }))}
            />
            <Aside>
              <LeftCard icon="data_object" title="Projects" page="projects" gradient="redYellow" colorLight="orange" />
              <LeftCard icon="electric_bolt" title="Tips" page="tips" gradient="purplePink" colorLight="pink" />
              <LeftCard icon="art_track" title="All Posts" page="posts" gradient="greenBlue" colorLight="green" />
              <LeftCard icon="movie_creation" title="Videos" page="videos" gradient="yellowGreen" colorLight="yellow" />
            </Aside>
          </Main>
        </ContentContainer>
      </HomeLayout>
    </Container>
  );
};

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
  const posts: Post[] = await service.getAllPostsByLocale(locale as AvailableLocales);

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
      postsList: posts,
    },
  };
}

export default Home;
