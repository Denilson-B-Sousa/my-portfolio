import { NavLink } from "react-router-dom";
import { Navbar } from "../navbar";
import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

const html = document.documentElement;

export function Header() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  function handleThemeChange() {

    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);

    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {

    if(theme === 'dark') {
      html.classList.add('dark');

    } else {
      html.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <header className="grid grid-cols-3 laptop:w-[72.5rem] justify-between items-center pt-8 pb-6 border-b-light-gray border-b-2">
      <div className="col-span-2 laptop:col-span-2">
        <h1 className="text-2xl laptop:text-4xl font-ShadowsIntoLight text-gray-600 dark:text-white">
          <NavLink to="/">
            <span className="dark:font-semibold">Denilson B.</span> Sousa
          </NavLink>
        </h1>
      </div>

      <div className="laptop:inline-flex justify-end gap-8 hidden">
        <Navbar />

        <button onClick={() => handleThemeChange()}>
          {theme === "dark" ? (
            <Sun width={24} height={24} className="text-light-500" />
          ) : (
            <Moon width={24} height={24} className="dark:text-gray-600" />
          )}
        </button>
      </div>
    </header>
  );
}