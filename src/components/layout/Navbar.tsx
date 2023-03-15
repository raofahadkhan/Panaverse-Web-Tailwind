"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Logo from "/public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    // <Wrapper>
    <header className="max-w-screen-2xl md:px-4 mx-auto">
      <nav className="flex justify-between items-center relative  ">
        <div className="pl-2 md:pl-0">
          <Link href="/">
            <Image src={Logo} alt="Panaverse Dao Logo" />
          </Link>
        </div>
        <div
          className={`md:static absolute bg-white z-50 justify-center  transition-all duration-700  delay-150 md:min-h-fit min-h-[100vh] left-0 ${
            isOpen ? "top-[65px]" : "-top-[786px] "
          } md:w-auto w-screen left-0 flex  items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center items-center text-lg md:gap-[4vw] font-semibold gap-8">
            <li className="hover:text-gray-500 hover:cursor-pointer">Home</li>
            <li className="hover:text-gray-500 hover:cursor-pointer">
              Courses
            </li>
            <li className="hover:text-gray-500 hover:cursor-pointer">About</li>
            <li className="hover:text-gray-500 hover:cursor-pointer">
              Contact
            </li>
            <a href="https://portal.piaic.org/">
              <button className="bg-[#00616C]  md:hidden text-white px-5 py-2 rounded-full hover:bg-[#00616ccc]">
                Enroll Now
              </button>
            </a>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://portal.piaic.org/">
            <button className="bg-[#00616C] hidden md:block text-white px-5 py-2 rounded-full hover:bg-[#00616ccc] ">
              Enroll Now
            </button>
          </a>
          <div>
            <button
              className="cursor-pointer md:hidden pr-2"
              onClick={(e) => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
    // </Wrapper>
  );
};

export default Navbar;
