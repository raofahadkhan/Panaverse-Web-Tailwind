import { BoxProps } from "@/Data/types";
import Link from "next/link";
import React, { FC } from "react";

const Box: FC<BoxProps> = ({ id, title, description, href }) => {
  return (
    <div className="relative flex md:max-w-[340px]  hover:scale-105  ">
      <div className=" absolute -top-6 left-0 right-0 mx-auto bg-gradient-to-r from-[#00616C] to-[#16bacc] flex justify-center items-center text-white text-lg rounded-lg  h-12 w-12">
        <span className="font-bold font-mono">
          {id ? (
            id
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          )}
        </span>
      </div>
      <div className=" ">
        <div className="h-full    rounded-md border bg-slate-100  ">
          <div className="p-[24px] flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 mt-5 text-center">
              {title}
            </h3>
            <p className="text-base text-center">{description}</p>
            <Link href={`${href}`}>
              <button className="flex items-end mt-4 text-red-500 ">
                Learn More
                <span className="pb-0.5 text-red-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
