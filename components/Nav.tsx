import Link from "next/link";
import { FaBars } from "react-icons/fa";
import React from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { Logo } from "./assets/Logo";
import onClickFake from "../util/FakeClick";

const NavStyles =
  "relative z-50 py-8 px-4 w-full max-w-6xl m-auto flex justify-between items-center";
const MobileNavStyles =
  "absolute -bottom-[365px] left-1/2 -translate-x-1/2 w-11/12 py-8 px-6 bg-primary2 text-white rounded-xl flex flex-col items-center gap-8";
const DesktopNavStyles =
  "w-full md:flex justify-between items-center pl-8 hidden";
const MobileMenuStyles = "flex flex-col gap-8 md:flex-row md:gap-4 text-center";
const MobileButtonContainerStyles =
  "w-full pt-8 flex flex-col items-center gap-4 justify-evenly border-t border-neutral2";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <nav className={NavStyles}>
      <div>
        <Link href={"/"} id="navLogo">
          <Logo />
        </Link>
      </div>
      <div>
        <FaBars
          size={"28px"}
          className={`text-neutral2 md:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className={`${MobileNavStyles} ${isOpen ? "block" : "hidden"}`}>
        <ul className={MobileMenuStyles}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className={MobileButtonContainerStyles}>
          <Link
            href={"/"}
            className="py-2 w-full text-center"
            onClick={onClickFake}
          >
            Login
          </Link>
          <Link
            href={"/"}
            className="py-2 bg-primary1 w-full text-center rounded-full"
            onClick={onClickFake}
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className={DesktopNavStyles}>
        <ul className="flex flex-row md:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <Link
            href={"/"}
            className="py-2 px-6 text-center"
            onClick={onClickFake}
          >
            Login
          </Link>
          <Link
            href={"/"}
            className="py-2 px-6 bg-primary1 text-white rounded-full"
            onClick={onClickFake}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
