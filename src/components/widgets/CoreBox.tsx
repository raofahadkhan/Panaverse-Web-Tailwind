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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-12 lg:gap-x-9 md:gap-y-10 md:gap-x-4 w-fit mx-auto justify-items-center ">
          {coreBoxData.map((data: CoreBoxData, index: number) => (
            <Box
              href={data.href}
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
