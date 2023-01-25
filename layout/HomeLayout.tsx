import { Newsletter } from "@/components/blog/Newsletter/Newsletter";
import { Header } from "@/components/layout/Header/Header";
import React from "react";

const StartLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center h-full">
      <Header />
      {children}
      <Newsletter />
    </div>
  );
};

export default StartLayout;
