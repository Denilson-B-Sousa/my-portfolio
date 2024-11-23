import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="flex items-center justify-between w-[85vw] py-8 text-gray-600 dark:text-light-400 font-Poppins">
      <div>
        <span className="font-semibold">
          <NavLink to={"/"}>© Denilson B. Sousa - 2024</NavLink>
        </span>
      </div>
      <div>
        <ul className="inline-flex items-center gap-4 font-semibold">
          <li>
            <a 
              href="https://github.com/Denilson-B-Sousa" 
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/denilson-bezerra-de-sousa-38b964257/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}