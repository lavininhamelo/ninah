import Image from "next/image";
import React from "react";
import { Stack as StackInterface } from "data/stack";

interface Props extends StackInterface {
  name: string;
  imageSource: string;
  topics?: string[];
}

const Stack: React.FC<Props> = ({ name, imageSource, topics, ...rest }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="tech relative flex flex-col text-center w-[100px] z-0"
      {...rest}
    >
      <p className="text-xs mt-4">{name}</p>
      <Image className="mx-auto z-0" src={imageSource} alt={name} width={32} height={32} />
      {topics && topics.length > 0 && (
        <div
          className={
            (isHovered ? "flex" : "hidden") +
            " flex-wrap w-80 text-xs mt-4 !z-[9999] p-2 border-primary rounded-md transition-all duration-500 ease-out"
          }
        >
          {topics.map((topic) => (
            <span className="mr-2 mb-2 p-1 border-primary border-2 rounded-md" key={topic}>
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stack;