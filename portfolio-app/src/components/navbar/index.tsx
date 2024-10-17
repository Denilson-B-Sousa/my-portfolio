import {  List, Sun } from "@phosphor-icons/react";
import { NavItem } from "../navlink";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";


export function Navbar() {
  return (
    <nav className="inline-flex justify-end ">
      <ul className="laptop:inline-flex gap-8 hidden">
        <li>
          <NavItem to="/" navbar>
            Home
          </NavItem>
        </li>
        <li>
          <NavItem to="#" navbar>
            Projetos
          </NavItem>
        </li>
        <li>
          <NavItem to="#" navbar>
            Resumo
          </NavItem>
        </li>
        <li>
          <NavItem to="#" navbar>
            Sobre
          </NavItem>
        </li>
      </ul>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="inline-flex justify-end laptop:hidden">
          <List color="#fff" width={32} height={32} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-50 min-w-[220px] rounded-md bg-white p-8 font-poppins text-xl font-medium shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
            sideOffset={10}
          >
            <DropdownMenu.Label />
            <DropdownMenu.Item>
              <NavItem to="/" menu>
                Home
              </NavItem>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <NavItem to="/" menu>
                Sobre
              </NavItem>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <NavItem to="/" menu>
                Habilidades
              </NavItem>
            </DropdownMenu.Item>

            <DropdownMenu.Separator className="h-px bg-violet mt-2 " />

            <DropdownMenu.Item>
              <div className="flex justify-end py-4">
                <Sun size={24} color="black" />
              </div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </nav>
  );
}