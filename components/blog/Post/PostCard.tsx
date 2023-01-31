import React from "react";

// import { Container } from './styles';

interface PostCardProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  gradient: string;
  link: string;
}

export const PostCard: React.FC<PostCardProps> = ({ title, tags, date, description, gradient, ...props }) => {
  return (
    <div
      {...props}
      style={{ transition: "background-color .3s ease-in-out" }}
      className={"               dark:border-[rgba(255,255,255,.05)]dark:bg-[rgba(150,150,255,.05)] hover:dark:bg-[rgba(150,150,255,.08)] hover:shadow-lg box-border flex items-start rounded  w-full pb-8 border-b border-solid flex border-gray-100"}
    >
      <div
      className="w-full"
      >
   
        <p className="font-bold text-lg ml-2">{title}</p>
          <p className={"ml-2 font-medium uppercase rounded text-transparent bg-clip-text bg-gradient-to-tr " + gradient}
>
        {tags.map((tag) => (
          <span className="mr-2" key={tag}>
            #{tag}
          </span>
        ))}
      </p>
        
        <p
          className="
        ml-2 mt-2"
        ></p>
        <p className="ml-2 mt-2">
          {description} {description}
        </p>

        <span
          className={"ml-2 mt-8 font-medium  py-2 rounded text-transparent bg-clip-text bg-gradient-to-tr " + gradient}
        >
          Read the post >>
        </span>

        {/* <p className="ml-2 px-6 text-gray-500 font-light text-base my-6">{date}</p> */}
      </div>

    {
  /** 
   * 
   * <div className={" min-w-[3rem] w-12 h-12 mt-3 rounded-full mx-4 bg-gradient-to-tr " + gradient}></div>
        </div>
   */
    }  

      {/* <div className={"w-full bg-red-500 h-[5px] mt-auto rounded rounded-t-none bg-gradient-to-r " + gradient}></div> */}
    </div>
  );
};
