import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Logo } from "./assets/Logo";
import onClickFake from "../util/FakeClick";

const FooterStyles =
  "bg-neutral4 text-white grid grid-cols-1 lg:grid-cols-3 place-items-center text-center lg:place-items-stretch lg:text-left gap-4 py-12 lg:py-20";

const LinksContainer = "py-8 flex flex-col lg:flex-row lg:py-0 gap-8 lg:gap-20";

const LinksList = "flex flex-col gap-4 font-extralight text-md lg:text-base";

const links: { name: string; links: { name: string; href: string }[] }[] = [
  {
    name: "Features",
    links: [
      { name: "Link Shortening", href: "/" },
      { name: "Branded Links", href: "/" },
      { name: "Analytics", href: "/" },
    ],
  },
  {
    name: "Resources",
    links: [
      { name: "Blog", href: "/" },
      { name: "Developers", href: "/" },
      { name: "Support", href: "/" },
    ],
  },
  {
    name: "Company",
    links: [
      { name: "About", href: "/" },
      { name: "Our Team", href: "/" },
      { name: "Careers", href: "/" },
      { name: "Contact", href: "/" },
    ],
  },
];
const socialLinks: { name: string; href: string; icon: React.ReactNode }[] = [
  { name: "Facebook", href: "/", icon: <FaFacebook /> },
  { name: "Twitter", href: "/", icon: <FaTwitter /> },
  { name: "Pinterest", href: "/", icon: <FaPinterest /> },
  { name: "Instagram", href: "/", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className={FooterStyles}>
      <div id="footLogo" className="lg:flex lg:justify-center">
        <Link href={"/"} aria-label="Shortly logo">
          <Logo color="#ffffff" />
        </Link>
      </div>
      <div className={LinksContainer}>
        {links.map((link, index) => (
          <div className="flex flex-col gap-6" key={index}>
            <h3 className="text-base">{link.name}</h3>
            <ul className={LinksList}>
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={onClickFake}
                    aria-label={`${link.name} link`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="lg:flex lg:justify-start lg:pl-16">
        <ul className="flex gap-6 text-lg">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={onClickFake}
                aria-label={`${link.name} icon link`}
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
