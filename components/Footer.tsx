import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral4 text-white grid grid-cols-1 place-items-center gap-2 py-8">
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
      <div className="py-8 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h3>Features</h3>
          <ul className="flex flex-col gap-4">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3>Resources</h3>
          <ul className="flex flex-col gap-4">
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3>Company</h3>
          <ul className="flex flex-col gap-4">
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex gap-4 text-[22px]">
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
