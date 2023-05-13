import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Icon } from "@/components/ui";
import { Menu, MenuItem, Nav, Title, MenuHeader, MenuListMobile, MenuMobile, NavMobile } from "./styles";
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
