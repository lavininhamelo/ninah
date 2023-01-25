import { Newsletter } from "@/components/blog/Newsletter/Newsletter";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import React from "react";

const StartLayout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center h-full">
      <Navbar />
      <div className="w-full">{children}</div>
      <Newsletter />
    </div>
  );
};

export default StartLayout;
