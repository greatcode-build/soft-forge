"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../constants";
import { CustomButton } from "./CustomButton";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="text-gray-700 border-b border-gray-200">
      <nav className="container mx-auto flex p-5 flex-row justify-between">
        <Link
          href="/"
          className="flex font-medium items-center text-gray-900 mb-2 md:mb-0"
        >
          <Image
            src="/icons/soft-forge.svg"
            width={32}
            height={32}
            alt="logo"
          />
          <span className="ml-2 text-xl">Soft Forge</span>
        </Link>
        <ul className="hidden md:flex justify-center items-center gap-6 text-base">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link
                href={path}
                className="hover:text-blue-600 hover:text-semibold"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <CustomButton
            title="Register"
            buttonStyle={`text-white py-1.5 px-5 bg-blue-600 hover:bg-blue-700 rounded-full text-base`}
          />
        </div>
        <button
          className="md:hidden block text-slate-900"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`${isOpen ? "flex" : "hidden"} md:hidden container mx-auto flex-col pl-8 pb-5`}
      >
        <ul>
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link href={path} onClick={handleCloseMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export { Navbar };
