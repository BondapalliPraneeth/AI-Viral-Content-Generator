import { useState, useEffect } from "react";

export const useTheme = () => {
  const [dark, setDark] = useState(() => {
    const s = localStorage.getItem("theme");
    return s ? s === "dark" : true;
  });
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return { dark, toggle: () => setDark(d => !d) };
};
