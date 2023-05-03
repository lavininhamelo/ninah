import React from "react";
import { Newsletter } from "@/components/blog";
import { Footer, Header } from "@/components/layout";

const HomeLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <section className="w-full flex flex-col items-center h-full">
      <Header />
      <main className="max-w-[1200px] mb-8 px-2 sm:px-4 md:px-8 xl:px-0">
        {children}
        <Newsletter />
      </main>

      <Footer />
    </section>
  );
};

export default HomeLayout;
