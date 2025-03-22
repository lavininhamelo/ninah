import tw, { styled } from "twin.macro";

const Container = styled.section`
  ${tw`bg-white bg-opacity-40 dark:bg-opacity-100 dark:border-[rgba(255,255,255,.05)] dark:bg-[rgba(150,150,255,.05)] hover:dark:bg-[rgba(150,150,255,.08)] hover:shadow-lg flex flex-col border border-solid border-gray-200 rounded w-full col-span-1`}
  transition: background-color .3s ease-in-out;

`;

export { Container };
