import Link from "next/link";
import { FaBars } from "react-icons/fa";
import React from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { Logo } from "./assets/Logo";

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

  return (
    <nav className="relative z-50 py-8 px-4 flex justify-between items-center">
      <div>
        <Link href={"/"}>
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
      <div
        className={`absolute -bottom-[350px] left-1/2 -translate-x-1/2 w-11/12 py-8 px-6 bg-primary2 text-white rounded-xl flex flex-col items-center gap-8 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-8 md:flex-row md:gap-4 text-center">
          <li>
            <Link href={"/features"}>Features</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/resources"}>Resources</Link>
          </li>
        </ul>
        <div className="w-full pt-8 flex flex-col items-center gap-4 justify-evenly border-t border-neutral2">
          <Link href={"/"}>Login</Link>
          <Link
            href={"/"}
            className="py-2 bg-primary1 w-full text-center rounded-full"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className={`w-full justify-between pl-8 hidden md:flex`}>
        <ul className="flex flex-row md:gap-4">
          <li>
            <Link href={"/features"}>Features</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/resources"}>Resources</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <Link href={"/login"}>Login</Link>
          <Link href={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
