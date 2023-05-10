import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useTheme } from "@/hooks/useTheme";
import { Icon } from "@/components/ui";
import { Menu, MenuItem, Nav, Title } from "./styles";
import tw from "twin.macro";
import { MenuOptions } from "./MenuOption";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const router = useRouter();

  const currentPath = router.pathname;
  const isHome = router.pathname === "/";

  const menu = [
    { name: "About", path: "/about-me" },
    { name: "Posts", path: "/posts" },
    { name: "Tips", path: "/tips" },
    { name: "Projects", path: "/projects" },
  ];

  const MenuMobile = tw.div`bg-black bg-opacity-30 fixed top-0 right-0 transition-all duration-300 backdrop-blur-lg ease-in-out !z-50`;
  const NavMobile = tw.div`flex justify-between items-start p-4 h-full flex-wrap transition-all  duration-300  ease-in-out`;
  const MenuListMobile = tw.ul`w-full flex md:hidden flex-col h-full uppercase list-none items-center justify-between  max-h-[50%]`;
  const MenuHeader = tw.div`flex justify-between items-center w-full`;
  const menuClassName = (isMenuOpen ? "  h-screen w-screen rounded-none" : "  h-0 w-0 rounded-full");

  return (
    <Nav>
      <Title href="/">Ninah</Title>
      <Menu>
        {!isHome && (
          <MenuItem active={false}>
            <Link href="/">Home</Link>
          </MenuItem>
        )}
        {menu.map((item, index) => (
          <MenuItem key={index} active={currentPath === item.path}>
            <Link href={item.path}>{item.name}</Link>
          </MenuItem>
        ))}
      </Menu>
      <div className="md:hidden">
        <Icon className="cursor-pointer" onClick={() => setIsMenuOpen(true)} size="3xl" type="outlined">
          menu
        </Icon>
      </div>
      <MenuOptions className="hidden md:flex" />
      <MenuMobile className={menuClassName}>
        <NavMobile className={isMenuOpen ? " flex" : " hidden"}>
          <MenuHeader>
            <Title href="/">Ninah</Title>
            <MenuOptions className="flex md:hidden mt-2" />
            <Icon className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(false)} size="3xl" type="outlined">
              close
            </Icon>
          </MenuHeader>
          <MenuListMobile>
            {isMenuOpen && menu.map((item, index) => (
              <MenuItem className="!text-2xl" key={index} active={currentPath === item.path}>
                <Link href={item.path}>{item.name}</Link>
              </MenuItem>
            ))}
          </MenuListMobile>
          <MenuOptions className="flex md:hidden mx-auto" />
        </NavMobile>
      </MenuMobile>
    </Nav>
  );
};
