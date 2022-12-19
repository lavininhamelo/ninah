import Head from "next/head";
import tw, { styled } from "twin.macro";
import { Octokit } from "octokit";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { Header } from "@/components/layout/Header/Header";
import { useTheme } from "@/hooks/useTheme";

const Title = tw.h1`text-xl font-bold text-blue-500 mb-4`;
const Button = styled.button<{ isCold: boolean }>((props) => [
  tw`w-32 rounded h-10 bg-primary text-light shadow-lg bg-gradient-to-r`,
  props.isCold ? tw`from-cyan-500 to-blue-500` : tw`from-pink-500 to-orange-500`,
]);

interface Gist {
  id: string;
  url: string;
  public: boolean;
  comments: number;
  description: string;
  files: {
    [key: string]: {
      filename: string;
      type: string;
      size: number;
      raw_url: string;
    };
  };
}

export default function Home(params: any) {
  const { data } = useSession();
  const { toggleTheme, theme } = useTheme();
  const [gists, setGists] = useState<Gist[]>([]);

  const getMyGists = async () => {
    console.log("getMyGists");
    const octokit = new Octokit({ auth: data?.accessToken });
    const gists = await octokit.request("GET /gists{?since,per_page,page}", {});
    console.log(gists);
    setGists([...gists.data]);
  };

  useEffect(() => {
    if (data?.accessToken) {
      const fetchData = async () => {
        await getMyGists();
      };

      fetchData();
    }
  }, [data?.accessToken]);

  return (
    <section className="w-full h-full">
      <Head>
        <title>DevPad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="bg-light flex flex-col items-center justify-center h-full">
        <Title>Hello DevPad World!</Title>
        <Button isCold={theme === "dark"} onClick={() => toggleTheme()}>
          Change Theme
        </Button>

        <div className="w-8/12 border border-solid p-4 border-gray-200 dark:border-gray-800 mt-8 rounded ">
          <h1 className="text-2xl font-bold mb-2">My Gists</h1>
          {gists.map((gist) => (
            <p className="mt-4" key={gist.id}>
              <a href={gist.url} target="_blank" rel="noreferrer">
                {gist.description}
              </a>
            </p>
          ))}
        </div>
      </main>
    </section>
  );
}
