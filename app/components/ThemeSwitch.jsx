"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import IconMoon from "@/public/icon-moon";
import IconSun from "@/public/icon-sun";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme == "dark" ? (
        <button
          className="flex gap-2 text-white hover:text-tx-light justify-center items-center"
          onClick={() => setTheme("light")}
        >
          <p className="text-xs tracking-wider">LIGHT</p>
          <IconSun className="fill-current" />
        </button>
      ) : (
        <button
          className="flex gap-2 text-tx-light hover:text-card-dark justify-center items-center"
          onClick={() => setTheme("dark")}
        >
          <p className="text-xs tracking-wider">DARK</p>
          <IconMoon className="fill-current" />
        </button>
      )}
    </>
  );
};

{
  /* <button value={theme} onChange={(e) => setTheme(e.target.value)}>
      {theme == "dark" ? <p value="light">Light</p> : <p value="dark">Dark</p>}
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </button> */
}

export default ThemeSwitch;
