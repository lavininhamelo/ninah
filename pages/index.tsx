import Head from "next/head";
import HomeLayout from "layout/HomeLayout";
import { Tech } from "@/components/blog/Tech/Tech";
import { PostCard } from "@/components/blog/Post/PostCard";
import { PostCardExpanded } from "@/components/blog/Post/PostCardExpanded";

import { useEffect, useState } from "react";
import Link from "next/link";
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
    { name: "Html", icon: "icon-html" },
    { name: "GraphQl", icon: "icon-graphql" },
    { name: "Quasar Framework", icon: "icon-quasar" },
  ];

  const gradients = [
    "from-blue-400 to-purple-500",
    "from-green-400 to-blue-500",
    "from-yellow-400 to-green-500",
    "from-red-400 to-yellow-500",
    "from-pink-400 to-red-500",
    "from-purple-400 to-pink-500",
  ];

  useEffect(() => {
     async function getPosts() {
       fetch("/api/devto/posts")
         .then((res) => res.json())
         .then((data) => {
           const devPosts = data.map((post:any) => {
              return {
                title: post.title,
                description: post.description,
                date: post.readable_publish_date,
                tags: post.tag_list,
                slug: post.slug,
                language: 'pt-Br'
              };
           })
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
        <div className="w-full max-w-[1200px] px-8 mb-8 xl:px-0 hidden sm:block">
          <div className="techs  gap-4 flex-wrap grid grid-cols-4 lg:grid-cols-5">
            {techs.map((tech, index) => (
              <Tech key={index} {...tech} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start w-full max-w-[1200px] px-8 xl:px-0 mt-16">
          <div className="flex w-full justify-between gap-x-4">
            <div className="w-full lg:w-7/12">
              <h2 className="text-2xl font-semibold mb-12">Latest Posts</h2>
              <div className="flex flex-col gap-y-6 mb-16">
                {/* {posts.length > 0 && <PostCardExpanded gradient={gradients[5]} {...posts[0]} link={posts[0].slug} />} */}
                {posts.slice(0, 5).map((post, index) => (
                  <PostCard gradient={gradients[index]} key={index} {...post} link={post.slug} />
                ))}
              </div>
            </div>
            <div className="w-4/12 rounded">
              <h2 className="text-left font-semibold text-2xl mb-12">Popular Posts</h2>
            </div>
          </div>
        </div>
      </HomeLayout>
    </section>
  );
}
