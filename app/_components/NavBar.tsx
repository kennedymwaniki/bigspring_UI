"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.webp";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between text-black p-3 md:px-20">
      <div>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
      </div>
      <nav className="font-bold hidden md:block">
        <ul className="flex justify-between items-center gap-6">
          <li className="hover:text-teal-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-teal-500">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-teal-500">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="hover:text-teal-500">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-teal-500">
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <button className="bg-teal-500 hidden py-1 px-4 rounded-xl md:block">
          Get started
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="show-button"
          className="block cursor-pointer items-center md:hidden"
        >
          {isOpen ? <IoClose size={29} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
