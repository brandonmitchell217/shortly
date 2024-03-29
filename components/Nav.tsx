import Link from "next/link";
import { FaBars } from "react-icons/fa";
import React from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { Logo } from "./assets/Logo";
import onClickFake from "../util/FakeClick";
import { Button } from "./Button";

const NavStyles: string =
  "relative z-50 py-8 px-4 w-full max-w-6xl m-auto flex justify-between items-center";
const MobileNavStyles: string =
  "absolute -bottom-[365px] left-1/2 -translate-x-1/2 w-11/12 py-8 px-6 bg-primary2 text-white rounded-xl flex flex-col items-center gap-8";
const DesktopNavStyles: string =
  "w-full md:flex justify-between items-center pl-8 hidden";
const MobileMenuStyles: string =
  "flex flex-col gap-8 md:flex-row md:gap-4 text-center";
const MobileButtonContainerStyles: string =
  "w-full pt-8 flex flex-col items-center gap-4 justify-evenly border-t border-neutral2";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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
        <Link href={"/"} id="navLogo" aria-label="Shortly Logo link">
          <Logo />
        </Link>
      </div>
      <div>
        <FaBars
          size={"28px"}
          className={`text-neutral2 md:hidden cursor-pointer hover:text-primary2 transition-colors ${
            isOpen && "text-primary2"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Mobile Menu Button"
        />
      </div>
      <div className={`${MobileNavStyles} ${isOpen ? "block" : "hidden"}`}>
        <ul className={MobileMenuStyles}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Button
                type="link"
                style="no-bg"
                className={"text-md"}
                href={link.href}
              >
                {link.name}
              </Button>
            </li>
          ))}
        </ul>
        <div className={MobileButtonContainerStyles}>
          <Button type="link" style="no-bg" onClick={onClickFake}>
            Login
          </Button>
          <Button
            type="link"
            style="rounded-full"
            className={"w-full text-md"}
            onClick={onClickFake}
          >
            Sign Up
          </Button>
        </div>
      </div>

      <div className={DesktopNavStyles}>
        <ul className="flex flex-row md:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Button
                type="link"
                style="no-bg"
                className={"lg:text-base"}
                href={link.href}
              >
                {link.name}
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <Button
            type="link"
            style="no-bg"
            className={"px-8 text-center lg:text-base w-auto"}
            onClick={onClickFake}
          >
            Login
          </Button>
          <Button
            type="link"
            style="rounded-full"
            className={"px-8 mt-0 lg:text-base"}
            onClick={onClickFake}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
