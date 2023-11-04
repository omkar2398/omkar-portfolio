"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const lists = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <>
      <div className="flex justify-between items-center m-8">
        <div>
          <Image
            src="/OG_Logo.png"
            alt="Omkar Govalkar Logo"
            width={48}
            height={48}
          />
        </div>
        <div>
          <ul className="hidden md:flex lg:flex">
            {lists.map((menu, index) => (
              <li key={index} className="p-4">
                <Link href={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="mr-2 flex md:hidden"
          >
            {menuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="container bg-gray-50 ">
        <ul className={`${menuOpen ? "" : "hidden"} `}>
          {lists.map((menu, index) => (
            <li key={index} className="p-4 hover:bg-gray-400">
              <Link href={menu.link}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
