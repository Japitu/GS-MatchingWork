import { useEffect, useState, type PropsWithChildren } from "react";
import ThemeContext from "./ThemeContext";

export interface ThemeProviderProps extends PropsWithChildren {}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = (theme: string) => {
    setTheme(theme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

