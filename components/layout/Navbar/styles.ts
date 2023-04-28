import tw, { styled } from "twin.macro";
import Link from "next/link";

export const Nav = styled.nav(() => tw`w-full z-10 flex justify-between items-center max-w-[1200px] text-secondary dark:text-white py-4 md:py-8 px-2 sm:px-4 md:px-8 xl:px-0`);
export const Title = styled(Link)(() => tw`font-cursive text-2xl`);
export const Menu = styled.ul(() => tw`hidden md:flex items-center`);
export const MenuItem = styled.li(
  () =>
    tw`ml-14 first:ml-0 hover:text-primary dark:hover:text-primary transition-colors duration-200 ease-in-out cursor-pointer`
);
