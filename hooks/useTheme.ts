import {useState, useEffect} from 'react'

export function useTheme() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme('dark')
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme('light')
    }
  };

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem("theme") !== "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme('dark')
    }
  }, [])

  return {theme, toggleTheme}
}
