import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Dashboard
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-gray-600 dark:text-gray-300 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default Navbar;
