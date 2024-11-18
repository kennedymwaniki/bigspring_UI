"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.webp";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-black p-3 md:px-20 relative">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="show-button"
          className="block cursor-pointer items-center md:hidden"
        >
          {isOpen ? <IoClose size={29} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      <nav
        className={`font-bold ${
          isOpen ? "block" : "hidden"
        } md:block absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row justify-between items-center gap-6">
          <li className="hover:text-teal-500">
            <Link
              className={`link ${
                pathname === "/" ? "active text-teal-600" : ""
              }`}
              href="/"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-teal-500">
            <Link
              className={`link ${
                pathname === "/blog" ? "active text-teal-600" : ""
              }`}
              href="/blog"
              onClick={handleLinkClick}
            >
              Blog
            </Link>
          </li>
          <li className="hover:text-teal-500">
            <Link
              className={`link ${
                pathname === "/pricing" ? "active text-teal-600" : ""
              }`}
              href="/pricing"
              onClick={handleLinkClick}
            >
              Pricing
            </Link>
          </li>
          <li className="hover:text-teal-500">
            <Link
              className={`link ${
                pathname === "/contact" ? "active text-teal-600" : ""
              }`}
              href="/contact"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li className="hover:text-teal-500">
            <Link
              className={`link ${
                pathname === "/faq" ? "active text-teal-600" : ""
              }`}
              href="/faq"
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-4 mt-4 md:mt-0">
        <button className="bg-teal-500 hidden py-1 px-4 rounded-xl md:block text-white">
          Get started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
