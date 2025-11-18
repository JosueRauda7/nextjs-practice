import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  {
    path: "/pricing",
    label: "Precios",
  },
  {
    path: "/about",
    label: "Acerca de",
  },
  {
    path: "/contact",
    label: "Contáctanos",
  },
];

export const Menu = async () => {
  return (
    <>
      <nav className="flex bg-blue-950 bg-opacity-90 p-2 m-2 rounded">
        <Link className="flex items-center" href="/">
          <HomeIcon className="mr-2" />
          <span>Inicio</span>
        </Link>
        <div className="flex flex-1"></div>
        {navItems.map((item) => (
          <ActiveLink
            key={item.path}
            path={item.path}
            label={item.label}
          />
        ))}
      </nav>
    </>
  );
}