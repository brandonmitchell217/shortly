import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import React from "react";
import { useIsomorphicLayoutEffect, useMediaQuery } from "usehooks-ts";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const matches = useMediaQuery("(min-width: 768px)");

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
          <Image
            src={"/assets/logo.svg"}
            alt="Shortly logo"
            width={120}
            height={80}
          />
        </Link>
      </div>
      <div>
        <FaBars
          size={"28px"}
          className={`text-neutral2 ${matches ? "hidden" : "block"}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div
        className={`absolute -bottom-40 right-8 border-2 flex flex-col md:flex-row ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-8 md:flex-row md:gap-4">
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
      <div
        className={`w-full justify-between pl-8 ${matches ? "flex" : "hidden"}`}
      >
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
