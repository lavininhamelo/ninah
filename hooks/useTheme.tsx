import React, { ProviderProps } from "react";
import { useState, useEffect, createContext, useContext } from "react";

const DEFAULT_THEME = "light"
interface ThemeProps {
  theme?: string;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeProps>({
  theme: DEFAULT_THEME,
  toggleTheme: () => {},
  isDark: false,
});

const ThemeProvider: React.FC<ProviderProps<string>> = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const isDark = theme === "dark";

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme(DEFAULT_THEME);
    }
  }, []);

  const toggleTheme = () => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme || storedTheme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.warn("useTheme must be used within an ThemeProvider.");
  }
  return context;
};

export { useTheme, ThemeProvider };
export default useTheme;
