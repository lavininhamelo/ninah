import React from "react";
import useTheme from "@/hooks/useTheme";

import { Newsletter } from "@/components/blog";
import { Navbar, Footer } from "@/components/layout";
import { Container } from "./styles";

const BaseLayout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <div className="w-full flex flex-col items-center h-full">
      <Container isDark={isDark} />
      <Navbar />
      <div className="w-full max-w-[1200px] z-10 flex-1 px-2 sm:px-4 md:px-8 xl:px-0">{children}</div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BaseLayout;
