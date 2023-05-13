import tw, { styled } from "twin.macro";
import Link from "next/link";

export const Nav = styled.nav(() => tw`w-full relative z-50 flex justify-between items-center max-w-[1200px] text-secondary dark:text-white py-4 md:py-8 px-2 sm:px-4 md:px-8 xl:px-0`);
export const Title = styled(Link)(() => tw`font-cursive text-2xl`);
export const Menu = styled.ul(() => tw`hidden md:flex items-center`);
export const MenuItem = styled.li`
  ${tw`ml-4 md:ml-8 text-base font-medium cursor-pointer hover:text-primary transition-colors duration-200`}
  ${({ active }: { active: boolean }) => active && tw`text-primary`}
`;

export const MenuMobile = tw.div`bg-black bg-opacity-20 fixed top-0 right-0 transition-all duration-300 backdrop-blur-lg ease-in-out z-50 px-4`;
export const NavMobile = tw.div`flex justify-between items-start p-4 h-full flex-wrap transition-all  duration-300  ease-in-out`;
export const MenuListMobile = tw.ul`w-full flex md:hidden flex-col h-full uppercase list-none items-center justify-between  max-h-[50%]`;
export const MenuHeader = tw.div`flex justify-between items-center w-full`;