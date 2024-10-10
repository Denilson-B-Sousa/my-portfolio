import { tv, VariantProps } from 'tailwind-variants';
import { NavLink, NavLinkProps } from 'react-router-dom';

  const navlinktv = tv({
    base: "font-Poppins text-lg",
    variants: {
   
      navbar: {
        true: "relative pb-2 no-underline text-inherit before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:h-[2px] before:w-0 before:bg-light-400 before:transition-all before:duration-300 before:transform-origin-center hover:before:w-full hover:before:-translate-x-[50%]",
      },
    },
  });

  export type NavLinkProperties = NavLinkProps & VariantProps<typeof navlinktv> & {
    navbar?: boolean;
  }

  export function NavItem({to, navbar, ...props} : NavLinkProperties) {
    return (
        <NavLink 
          to={to}
          className={navlinktv({navbar})}
          {...props}
        />
    )
  }
