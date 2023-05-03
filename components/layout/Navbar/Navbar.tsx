import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useTheme } from "@/hooks/useTheme";
import { Icon } from "@/components/ui";
import { Menu, MenuItem, Nav, Title } from "./styles";

export const Navbar: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const router = useRouter();
  const iconName = theme === "dark" ? "light_mode" : "dark_mode";

  const currentPath = router.pathname;
  const isHome = router.pathname === "/";

  const menu = [
    { name: "About", path: "/about-me" },
    { name: "Posts", path: "/posts" },
    { name: "Tips", path: "/tips" },
    { name: "Projects", path: "/projects" },
  ];

  const handleLocaleChange = (event: any) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

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

      <div className="flex items-center gap-4">
        <select className="bg-transparent" onChange={handleLocaleChange} value={router.locale}>
          <option value="en">EN-US</option>
          <option value="pt-BR">PT-BR</option>
        </select>
        <Icon onClick={() => toggleTheme()} type="outlined">
          {iconName}
        </Icon>
      </div>
    </Nav>
  );
};
