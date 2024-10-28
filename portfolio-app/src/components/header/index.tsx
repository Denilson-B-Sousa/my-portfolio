import { NavLink } from "react-router-dom";
import { Navbar } from "../navbar";
import { Sun } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="grid grid-cols-3 laptop:w-[72.5rem] justify-between items-center pt-8 pb-6 border-b-light-gray border-b-2">
      <div className="col-span-2 laptop:col-span-2">
        <h1 className="text-2xl laptop:text-4xl font-ShadowsIntoLight text-white">
          <NavLink to="/">
            <span className="font-semibold">Denilson B.</span> Sousa
          </NavLink>
        </h1>
      </div>

      <div className="laptop:inline-flex justify-end gap-8 hidden">
        <Navbar />

        <button>
          <Sun color="white" width={24} height={24} />
        </button>
      </div>
    </header>
  );
}