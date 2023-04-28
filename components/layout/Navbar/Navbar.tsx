import { useTheme } from "@/hooks/useTheme";
import React from "react";

import { Menu, MenuItem, Nav, Title } from "./styles";
import { Icon } from "@/components/ui/Icon/Icon";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const iconName = theme === "dark" ? "light_mode" : "dark_mode";

  return (
    <Nav>
      <Title href="/">Ninah</Title>
      <Menu>
        <MenuItem>
          <Link href="/about-me">About</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/posts">Posts</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/tips">Tips</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/projects">Projects</Link>
        </MenuItem>
      </Menu>

      <div className="flex items-center gap-4">
        <p>EN-US</p>
        <Icon onClick={() => toggleTheme()} type="outlined">
          {iconName}
        </Icon>
      </div>
    </Nav>
  );
};
