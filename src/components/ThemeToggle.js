import React, { useEffect, useState } from "react";
import "./ThemeToggle.css"; // Make sure to create the CSS file for theme styling

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <button onClick={handleToggle}>Toggle Theme ({theme})</button>;
};

export default ThemeToggle;
