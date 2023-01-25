import React from "react";

// import { Container } from './styles';

interface PostCardExpandedProps {
  title: string;
  tags: string[];
  date: string;
  gradient: string;
  link: string;
}

export const PostCardExpanded: React.FC<PostCardExpandedProps> = ({ title, tags, date, gradient, ...props }) => {
  return (
    <div
      {...props}
      style={{ transition: "background-color .3s ease-in-out" }}
      className={
        "text-white min-h-[300px] h-full dark:border-[rgba(255,255,255,.05)]  dark:bg-[rgba(150,150,255,.05)] hover:dark:bg-[rgba(150,150,255,.08)] hover:shadow-lg                box-border                flex flex-col border-gray-200   pt-6 rounded w-full col-span-1  lg:col-span-2 min-w-[320px] border border-solid bg-gradient-to-tr bg-opacity-50 " +
        gradient
      }
    >
      <p className="font-bold text-lg ml-2 px-6">{title}</p>
      <p className="ml-2 mt-2 uppercase px-6">
        {tags.map((tag) => (
          <span className="mr-2 " key={tag}>
            #{tag}
          </span>
        ))}
      </p>
      <p className="ml-2 px-6 font-light my-6">{date}</p>
    </div>
  );
};
