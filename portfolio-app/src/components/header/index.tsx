import { NavLink } from "react-router-dom";
import { Navbar } from "../navbar";
import { Sun } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="grid grid-cols-3 justify-end p-10 items-center">
      <div className="col-span-2 laptop:col-span-1">
        <h1 className="text-2xl laptop:text-3xl font-ShadowsIntoLight text-white">
          <NavLink to="/">Denilson B. Sousa</NavLink>
        </h1>
      </div>

        <Navbar />

      <button className="laptop:inline-flex justify-end hidden">
        <Sun color="white" width={24} height={24}/>
      </button>
    </header>
  );
}