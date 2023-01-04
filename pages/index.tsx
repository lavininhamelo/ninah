import Head from "next/head";
import { Header } from "@/components/layout/Header/Header";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";

export default function Home() {
  const { isDark } = useTheme();
  const colofourBackground = `
rgb(var(--colors-light)); 
background-size: 100% 1200px;
background-repeat: no-repeat;
background-position: center;
background-image:
radial-gradient(at 10% 40%, hsla(324,100%,68%,0.15) 0px, transparent 35%),
radial-gradient(at 50% 35%, hsla(189,73%,62%, 0.05) 0px, transparent 40%), 
radial-gradient(at 80% 20%, hsla(225,100%,68%,0.15) 0px, transparent 45%),
radial-gradient(at 40% 55%, hsla(0,100%,81%,0.05) 0px, transparent 20%),
radial-gradient(at 60% 55%, hsla(0,100%,81%,0.05) 0px, transparent 20%);`;
  const colofourBackgroundLight = `
hsla(189,0%,100%,1); 
background-image: 
radial-gradient(at 73% 9%, hsla(324,81%,68%,0.35) 0px, transparent 80%), 
radial-gradient(at 46% 43%, hsla(0,100%,81%,0.53) 0px, transparent 80%), 
radial-gradient(at 40% 14%, hsla(11,87%,64%,0.53) 0px, transparent 80%), 
radial-gradient(at 10% 14%, hsla(49,89%,66%,0.62) 0px, transparent 80%), 
radial-gradient(at 93% 3%, hsla(225,100%,73%,0.59) 0px, transparent 80%), 
radial-gradient(at 70% 40%, hsla(189,73%,62%,1) 0px, transparent 80%);`;

  enum techss {
    GraphQl,
    QuasarFrameWork,
    React,
    Vue,
    Web3,
    NodeJS,
    Typescript,
    NoTech,
    Html,
  }

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
      image: "https://picsum.photos/500/300?7",
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
    },
    {
      image: "https://picsum.photos/500/300?6",
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
    },
    {
      image: "https://picsum.photos/500/300?5",
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
    },
    {
      image: "https://picsum.photos/500/300?4",
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
    },
    {
      image: "https://picsum.photos/500/300?3",
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
    },
    {
      image: "https://picsum.photos/500/300?2",
      title: "How to create a custom hook",
      description: "In this post I will show you how to create a custom hook",
      date: "November 29, 2022",
      tags: ["react", "hooks"],
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
              <div
                key={index}
                className="
                dark:border-[rgba(255,255,255,.05)]
                dark:bg-[rgba(180,150,255,0.05)]
                     hover:dark:bg-[rgba(180,150,255,.08)]
                hover:shadow-lg
                text-sm
                flex items-center px-4 border border-solid border-gray-200  
                h-12 rounded w-full"
              >
                <Image
                  src={"/icons/" + tech.icon + ".png"}
                  width={30}
                  height={30}
                  alt={tech.name}
                />
                <p className="ml-2">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[1200px] px-8 xl:px-0">
          <div className="flex justify-between md:my-8">
            <h2 className="text-2xl font-semibold">Latest Posts</h2>
            <h2 className="mb-8">View All</h2>
          </div>
          <div className="posts gap-4 flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <div
                key={index}
                style={{ transition: "background-color .3s ease-in-out" }}
                className="
                dark:border-[rgba(255,255,255,.05)]
                dark:bg-[rgba(150,150,255,.05)]
                hover:dark:bg-[rgba(150,150,255,.08)]
                hover:shadow-lg
                flex flex-col 
                border border-b-0 border-solid border-gray-200   
                rounded w-full
                pt-6 
                [&:nth-child(5)]:hidden [&:nth-child(6)]:hidden lg:[&:nth-child(5)]:flex lg:[&:nth-child(6)]:flex
                "
              >
                <div className="ml-2 px-6 mb-2">
                  <Image
                    alt="Background"
                    width="0"
                    height="0"
                    style={{ width: "100%", height: "100%" }}
                    src={post.image}
                  />
                </div>
                <p className="font-bold text-lg ml-2 px-6">{post.title}</p>
                <p className="ml-2 mt-2 uppercase px-6">
                  {post.tags.map((tag) => (
                    <span className="mr-2 text-primary" key={tag}>
                      #{tag}
                    </span>
                  ))}
                </p>
                <p className="ml-2 px-6 text-gray-500 mt-auto font-light text-base">
                  {post.date}
                </p>
                <div
                  className={
                    "bg-red-500 h-[5px]  rounded rounded-t-none mt-4 bg-gradient-to-r " +
                    gradients[index]
                  }
                ></div>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: colofourBackground,
            }}
            className="newsletter 
       
            dark:border-[rgba(255,255,255,.05)]
            border border-solid border-gray-200
            flex flex-col items-center justify-center rounded h-64 my-16 w-full"
          >
            <p className="uppercase mb-4">follow the blog </p>
            <p className="font-bold text-2xl mb-6">
              Subscribe in my newsletter
            </p>
            <div className="input flex w-96 bg-white h-12 rounded-lg border border-solid  border-gray-300">
              <input
                type="text"
                placeholder="Your e-mail address..."
                className="w-full h-full rounded-lg font-light text-sm mx-4 outline-none"
              />
              <button className="bg-primary text-sm text-white h-full  rounded-lg px-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
