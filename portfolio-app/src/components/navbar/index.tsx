import { NavItem } from "../navlink";

export function Navbar() {
  return (
    <nav>
      <ul className="inline-flex gap-8 ">
        <li>
          <NavItem to="/" navbar>Home</NavItem>
        </li>
        <li>
          <NavItem to="#" navbar>Projetos</NavItem>
        </li>
        <li>
          <NavItem to="#" navbar>Habilidades</NavItem>
        </li>
        <li>
          <NavItem to="#" navbar>Sobre</NavItem>
        </li>
      </ul>
    </nav>
  );
}