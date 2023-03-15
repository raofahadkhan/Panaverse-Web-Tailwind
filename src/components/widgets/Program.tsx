import { dataProgram } from "@/Data/types";
import React from "react";

const data: dataProgram = {
  id: "The Program in a Nutshell",
  title: "Earn While You Learn \n",
  description:
    "In this brand-new type of curriculum, students will learn how to make money and boost exports in the \n classroom and will begin doing so within six months of the programs beginning. It resembles a cross \n between a corporate venture and an educational project.",
};
const Program = () => {
  return (
    // <Wrapper>
    <div className="bg-slate-100">
      <div className="flex flex-col  items-center mx-3 py-16  md:py-16  mt-2">
        <h2 className="text-3xl font-[640] md:text-5xl  text-center mx-auto tracking-[0.5px]">
          {data.id}
        </h2>
        <h3 className="text-[25px] md:text-3xl font-semibold my-4 text-red-600 tracking-[0.25px] whitespace-pre-line">
          {data.title}
        </h3>
        <p className="text-center text-lg text-gray-800 font-[480px] whitespace-pre-line md:whitespace-normal lg:whitespace-pre-line ">
          {data.description}
        </p>
      </div>
    </div>
    // </Wrapper>
  );
};

export default Program;
