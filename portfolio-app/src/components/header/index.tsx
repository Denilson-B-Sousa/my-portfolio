import { NavLink } from "react-router-dom";
import { Navbar } from "../navbar";
import { Sun } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="flex justify-around items-center p-8">
      <div>
        <h1 className="text-3xl font-ShadowsIntoLight"><NavLink to="/">Denilson B. Sousa</NavLink></h1>
      </div>
      <Navbar/>
      <div>
        <Sun size={24}/>
      </div>
    </header>
  )
}