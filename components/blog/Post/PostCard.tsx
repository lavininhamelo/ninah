import React from "react";

// import { Container } from './styles';

interface PostCardProps {
  title: string;
  tags: string[];
  date: string;
  gradient: string;
  link: string;
}

export const PostCard: React.FC<PostCardProps> = ({ title, tags, date, gradient, ...props }) => {
  return (
    <div
      {...props}
      style={{ transition: "background-color .3s ease-in-out" }}
      className="
                dark:border-[rgba(255,255,255,.05)]
                dark:bg-[rgba(150,150,255,.05)]
                hover:dark:bg-[rgba(150,150,255,.08)]
                hover:shadow-lg
                box-border
                flex flex-col 
                border border-b-0 border-solid border-gray-200   
                 rounded 
                 w-full
                col-span-1
                
                "
    >
      <div
        className={
          "hidden lg:block w-auto border-gray-200 min-h-[200px]  mb-6 rounded border border-solid bg-gradient-to-tr bg-opacity-50 " +
          gradient
        }
      ></div>
      <p className="font-bold text-lg ml-2 px-6">{title}</p>
      <p className="ml-2 mt-2 uppercase px-6">
        {tags.map((tag) => (
          <span className="mr-2 text-primary" key={tag}>
            #{tag}
          </span>
        ))}
      </p>
      <p className="ml-2 px-6 text-gray-500 font-light text-base my-6">{date}</p>
      <div className={"bg-red-500 h-[5px] mt-auto rounded rounded-t-none bg-gradient-to-r " + gradient}></div>
    </div>
  );
};
