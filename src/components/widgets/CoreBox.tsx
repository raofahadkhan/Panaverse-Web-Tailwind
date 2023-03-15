import { courseData } from "@/Data/CoreCoursesData";
import { CoreBoxData } from "@/Data/types";
import React from "react";
import Box from "../shared/Box";
import Wrapper from "../shared/Wrapper";

const CoreBox = () => {
  const coreBoxData: CoreBoxData[] = courseData;
  return (
    <div>
      <Wrapper>
        {/* <div className="mt-14  flex flex-col md:flex-row  space-y-10 md:space-y-0 md:gap-y-10 md:space-x-7  md:justify-center md:flex-wrap border-b pb-10 "> */}
        {/* <div className="mt-14 items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:flex-row mx-2 gap-10 md:gap-6 justify-center"> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-fit mx-auto"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-12 lg:gap-x-9 md:gap-y-10 md:gap-x-4 w-fit mx-auto justify-items-center ">
          {coreBoxData.map((data: CoreBoxData, index: number) => (
            <Box
              key={index}
              id={data.id}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </Wrapper>
      {/* <hr className="w-[90%] mx-auto mt-32" /> */}
    </div>
  );
};

export default CoreBox;
