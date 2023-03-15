import { specializedCourseData } from "@/Data/SpecializedCoursesData";
import { SpecializedBoxData } from "@/Data/types";
import React from "react";
import Box from "../shared/Box";
import Wrapper from "../shared/Wrapper";

const SpecializedBox = () => {
  const specializedBoxData: SpecializedBoxData[] = specializedCourseData;
  return (
    <div>
      <Wrapper>
        <div className="mx-4 md:mx-8 mt-20 mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00616C] to-[#1bd6eb] text-center">
            Specialized Tracks
          </h1>
          <p className="mt-6  sm:text-lg text-slate-700 text-center">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>
        {/* <div className="mt-14  flex flex-col md:flex-row gap-y-10 md:gap-y-10 lg:space-y-0 lg:gap-y-10 md:space-x-7 items-stretch md:justify-center flex-wrap "> */}
        {/* <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:flex-row mx-4 md:space-x-7 place-items-stretch  "> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12 lg:gap-x-4 md:gap-y-10 md:gap-x-4 w-fit mx-auto"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-12 lg:gap-x-9 md:gap-y-10 md:gap-x-4 w-fit mx-auto ">
          {specializedBoxData.map((data: SpecializedBoxData, index: number) => (
            <Box
              key={index}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default SpecializedBox;
