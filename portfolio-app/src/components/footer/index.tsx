import { ArrowUp } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="flex items-center justify-between w-[82vw] py-8 text-light-400 font-Poppins">
      <div>
        <span className="font-semibold">
          <NavLink to={"/"}>© Denilson B. Sousa - 2024</NavLink>
        </span>
      </div>
      <div>
        <ul className="inline-flex items-center gap-4 font-semibold">
          <li>
            <a href="#" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Linkedin
            </a>
          </li>

          <li>
            <span>
              <NavLink to={"/"}>
                <ArrowUp />
              </NavLink>
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
}