"use client";
import Image from "next/image";
import { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Logo from "/public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <header className="bg-white">
        <nav className="flex justify-between items-center ">
          <div>
            <Image src={Logo} alt="Panaverse Dao Logo" />
          </div>
          <div
            className={`md:static absolute bg-white justify-center  transition-all duration-700  delay-150 md:min-h-fit min-h-[60vh] left-0 ${
              isOpen ? "top-[9%]" : "top-[-100%] "
            } md:w-auto w-full flex  items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center items-center md:gap-[4vw] font-semibold gap-8">
              <li className="hover:text-gray-500 hover:cursor-pointer">Home</li>
              <li className="hover:text-gray-500 hover:cursor-pointer">
                Courses
              </li>
              <li className="hover:text-gray-500 hover:cursor-pointer">
                About
              </li>
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
                className="cursor-pointer md:hidden"
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
    </Wrapper>
  );
};

export default Navbar;
