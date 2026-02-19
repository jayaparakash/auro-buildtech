import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-btn"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <i className="bi bi-moon-stars-fill"></i>
      ) : (
        <i className="bi bi-sun-fill"></i>
      )}
    </button>
  );
}
