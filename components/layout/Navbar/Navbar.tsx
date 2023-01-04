import { Icon } from "@/components/general/Icon/Icon";
import { useTheme } from "@/hooks/useTheme";
import React from "react";

import {  Menu, MenuItem, Nav, Title} from "./styles";

export const Navbar: React.FC = () => {
      const { toggleTheme, theme } = useTheme();
      const iconName = theme === 'dark' ? "light_mode" : "dark_mode";

  return (
    <Nav>
      <Title>Ninah</Title>
      <Menu>
        <MenuItem>About</MenuItem>
        <MenuItem>Posts</MenuItem>
        <MenuItem>Snippets</MenuItem>
        <MenuItem>DevPad</MenuItem>
      </Menu>
      <Icon onClick={() => toggleTheme()} type="outlined">{iconName}</Icon>
    </Nav>
  );
};
