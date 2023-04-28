import Head from "next/head";
import HomeLayout from "layout/HomeLayout";
import { Tech } from "@/components/blog/Tech/Tech";
import { PostCard } from "@/components/blog/Post/PostCard";

import { useEffect, useState } from "react";
import { AboutMeCard } from "@/components/blog/AboutMeCard/AboutMeCard";
import { LeftCard } from "@/components/blog/LeftCard/LeftCard";
import PopularPosts from "@/components/blog/PopularPosts/PopularPosts";
import { gradients } from "@/components/ui/Colors/Colors";
interface Post {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  language: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const techs = [
    {
      name: "React",
      icon: "icon-react",
    },
    {
      name: "Javascript",
      icon: "icon-javascript",
    },
    {
      name: "Vue",
      icon: "icon-vue",
    },
    {
      name: "Web3",
      icon: "icon-web3",
    },
    { name: "NodeJS", icon: "icon-node" },
    { name: "Typescript", icon: "icon-typescript" },
    { name: "Software Engeneering", icon: "icon-brain" },
    { name: "Go", icon: "icon-golang" },
    { name: "GraphQl", icon: "icon-graphql" },
    { name: "Quasar Framework", icon: "icon-quasar" },
  ];



  useEffect(() => {
    async function getPosts() {
      fetch("/api/devto/posts")
        .then((res) => res.json())
        .then((data) => {
          const devPosts = data.map((post: any) => {
            return {
              title: post.title,
              description: post.description,
              date: post.readable_publish_date,
              tags: post.tag_list,
              slug: post.slug,
              language: "pt-Br",
            };
          });
          setPosts(devPosts.slice(0, 6));
        });
    }
    getPosts();
  }, []);

  return (
    <section className="w-full h-full">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Ninah&apos;s Blog</title>
        <meta name="description" content="Ninah's Blog" />
      </Head>
      <HomeLayout>
        <div className="w-full mb-8 xl:px-0 hidden sm:block">
          <h2 className="text-2xl font-semibold mb-8">By Tech</h2>
          <div className="techs  gap-2 flex-wrap grid grid-cols-4 lg:grid-cols-5">
            {techs.map((tech, index) => (
              <Tech key={index} {...tech} />
            ))}
          </div>
        </div>
        <div className="w-full ">
          <div className="flex justify-between md:my-8 items-center mb-8 mt-4">
            <h2 className="text-2xl font-semibold">Latest Posts</h2>
            <h2>View All</h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 w-full gap-y-8 md:gap-4 mb-16">
            {posts.slice(0, 3).map((post, index) => (
              <PostCard key={"a" + index} gradient={gradients[index]} index={index} {...post} link={post.slug} />
            ))}
          </div>
         
        <h2 className="text-2xl font-semibold mb-8">Posts</h2>
        <div className="flex flex-col md:flex-row">
          
          <div className="flex-1 md:pr-10">
            {posts.slice(3, 6).map((post, index) => (
              <PostCard
                key={"b" + index}
                className="mb-8"
                gradient={gradients[index]}
                index={index + 3}
                {...post}
                link={post.slug}
              />
            ))}
            </div> 


          <div className="md:w-4/12 bg-e min-w-[260px]">
            <AboutMeCard />
           
            <PopularPosts
              className="my-6"
              posts={posts.map((post) => ({
                title: post.title,
                page: post.slug,
              }))}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <LeftCard
                icon="data_object"
                title="Projects"
                page="projects"
                gradient={gradients[0]}
                colorLight="bg-indigo-500"
              />
              <LeftCard
                icon="electric_bolt"
                title="Tips"
                page="tips"
                gradient={gradients[1]}
                colorLight="bg-emerald-500"
              />
              <LeftCard
                icon="art_track"
                title="All Posts"
                page="posts"
                gradient={gradients[2]}
                colorLight="bg-green-500"
              />
              <LeftCard
                icon="movie_creation"
                title="Videos"
                page="videos"
                gradient={gradients[3]}
                colorLight="bg-orange-500"
              />
            </div>

          
          </div>

        </div>
        </div>


      </HomeLayout>
    </section>
  );
}
