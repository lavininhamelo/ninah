import Head from "next/head";
import  {useTheme}  from "@/hooks/useTheme";
import tw, { styled, theme } from "twin.macro";

const Title = tw.h1`text-xl font-bold text-blue-500 mb-4`;
const Button = styled.button<{ isCold: boolean }>((props) => [
  tw`w-32 rounded h-10 bg-primary text-light shadow-sm bg-gradient-to-r`,
  props.isCold ? tw`from-cyan-500 to-blue-500` : tw`from-pink-500 to-orange-500`,
]);

export default function Home(params: any) {
  const {toggleTheme, theme} = useTheme();
  
  return (
    <section className="w-full h-full bg-light p-4 flex flex-col items-center justify-center">
      <Head>
        <title>DevPad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Hello DevPad World!</Title>
      <Button isCold={theme === 'dark'} onClick={() => toggleTheme()}>
        Change Theme
      </Button>
    </section>
  );
}
