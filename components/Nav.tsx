import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import React from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

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
    <nav className="relative py-8 px-4 flex justify-between items-center">
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
        <FaBars onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div
        className={`absolute -bottom-32 right-8 border-2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-8">
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
      </div>
    </nav>
  );
};

export default Nav;
