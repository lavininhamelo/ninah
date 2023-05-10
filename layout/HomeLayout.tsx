import React from "react";
import { Newsletter } from "@/components/blog";
import { Footer, Header } from "@/components/layout";
import tw, { styled } from "twin.macro";

const Glow = styled.div`
  ${tw`hidden dark:block fixed bottom-0 left-0 w-[200px] h-[200px] lg:h-[400px] lg:w-[400px] z-[-10]`}
  background: radial-gradient(50% 50% at 50% 50%, rgba(167, 0, 90, 0.18) 0%, rgba(173, 79, 141, 0) 100%);
`;



const HomeLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <section className="w-full flex flex-col items-center h-full">
      <Header />
      <main className="max-w-[1200px] mb-8 px-2 sm:px-4 md:px-8 xl:px-0">
        {children}
        <Newsletter />
      </main>
      <Glow />
      <Footer />
    </section>
  );
};

export default HomeLayout;
