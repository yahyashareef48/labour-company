"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";

export default function Navbar() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsOnTop(window.scrollY <= 10);
    });
  }, [window.scrollY]);

  return (
    <nav
      className={`fixed w-full lg:px-6 px-4 py-4 transition-colors duration-200 z-50 ${
        !isOnTop && "bg-[#030712]"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-8">
        <div>
          <span className="text-[#ffe101] leading-[1.38969338em] tracking-[0.033em] uppercase text-[1.2em]">
            LABOUR
          </span>
          <span className="leading-[1.38969338em] tracking-[0.033em] uppercase text-[1.2em] ml-1">
            COMPANY
          </span>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-6 items-center">
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#about-us">About Us</Link>
            </li>
            <li>
              <Link href="#reviews">Testimonials</Link>
            </li>
            <li>
              <Link href="#contact">
                <MagicButton title="Contact Us" btnClassName="mt-0" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden block">
          <button onClick={() => setIsNavOpen((prev) => !prev)}>
            {isNavOpen ? <IoMdClose size={40} /> : <BiMenuAltRight size={40} />}
          </button>

          {isNavOpen && (
            <ul className="bg-[#030712] text-center w-full absolute left-0 top-[77px] flex flex-col p-4">
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li className="mt-6">
                <Link href="#about-us">About Us</Link>
              </li>
              <li className="mt-6">
                <Link href="#reviews">Testimonials</Link>
              </li>
              <li>
                <Link href="#contact">
                  <MagicButton title="Contact Us" />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
