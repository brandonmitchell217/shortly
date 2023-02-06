import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Logo } from "./assets/Logo";

const Footer = () => {
  return (
    <footer className="bg-neutral4 text-white grid grid-cols-1 lg:grid-cols-3 place-items-center text-center lg:place-items-stretch lg:text-left gap-4 py-12">
      <div className="lg:flex lg:justify-center">
        <Link href={"/"}>
          <Logo color="#ffffff" />
        </Link>
      </div>
      <div className="py-8 flex flex-col lg:flex-row lg:py-0 gap-8 lg:gap-20">
        <div className="flex flex-col gap-6">
          <h3>Features</h3>
          <ul className="flex flex-col gap-4 font-extralight">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3>Resources</h3>
          <ul className="flex flex-col gap-4 font-extralight">
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3>Company</h3>
          <ul className="flex flex-col gap-4 font-extralight">
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="lg:flex lg:justify-start lg:pl-12">
        <ul className="flex gap-6 text-[22px]">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaPinterest />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
