import Head from "next/head";
import { Header } from "@/components/layout/Header/Header";
import { Newsletter } from "@/components/blog/Newsletter/Newsletter";
import { Tech } from "@/components/blog/Tech/Tech";
import { PostCard } from "@/components/blog/Post/PostCard";

export default function Home() {
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

  const posts = [
    {
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
      slug: "slug",
    },
    {
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
      slug: "slug",
    },
    {
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
      slug: "slug",
    },
    {
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
      slug: "slug",
    },
    {
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
      slug: "slug",
    },
    {
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
      slug: "slug",
    },
  ];

  return (
    <section className="w-full h-full">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Ninah&apos;s Blog</title>
        <meta name="description" content="Ninah's Blog" />
      </Head>
      <div className="w-full flex flex-col items-center h-full">
        <Header />
        <div className="w-full max-w-[1200px] px-8 mb-8 xl:px-0 hidden sm:block">
          <h2 className="text-2xl font-semibold mb-8">By Tech</h2>
          <div className="techs  gap-2 flex-wrap grid grid-cols-4 lg:grid-cols-5">
            {techs.map((tech, index) => (
              <Tech key={index} {...tech} />
            ))}
          </div>
        </div>
        <div className="w-full max-w-[1200px] px-8 xl:px-0">
          <div className="flex justify-between md:my-8 items-center">
            <h2 className="text-2xl font-semibold">Latest Posts</h2>
            <h2 className="mb-8">View All</h2>
          </div>
          <div className="posts gap-4 flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
            <PostCard gradient={gradients[index]} key={index} {...post} link={post.slug} linkColor="#ff00ff" />
            ))}
          </div>
          <Newsletter />
        </div>
      </div>
    </section>
  );
}
