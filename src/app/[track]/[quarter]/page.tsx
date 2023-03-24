import Description from "@/components/shared/Description";
import Hero from "@/components/widgets/Hero";
import { TracksData } from "@/Data/data";
import Link from "next/link";
// import { quarterData } from "@/Data/types";
import React from "react";

function getData(id: string, quarter: string) {
  const res = TracksData.find((ele) => {
    if (ele.id === id) {
      return ele;
    }
  });
  const finalRes = res?.quarters.find((ele) => {
    if (ele.id === quarter) {
      return ele;
    }
  });

  return finalRes;
}

export function generateStaticParams() {
  const data = TracksData;
  const res = data.map((ele) => {
    const result = ele.quarters.map((e) => {
      return {
        track: ele.id,
        quarter: e.id,
      };
    });

    return result;
  });

  return res.flat();
}

function page({ params }: { params: { track: string; quarter: string } }) {
  const data = getData(params.track, params.quarter);

  if (!data) {
    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <h2 className="text-lg">404 Error | Page Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <div>
        <Hero
          id="segment"
          title="Specialization Track"
          header={data.name}
          description={data.heroDescription}
          buttonText="Enroll Now"
          img={true}
          bgcolor="black"
        />
        <div className="flex gap-x-4 gap-y-2 mt-2 justify-center lg:hidden">
          <Link href={`${params.track}/q4`}>
            <button className="py-4 px-8 bg-gradient-to-r from-[#00616C] to-[#16bacc] text-white rounded-md font-semibold">
              Q4
            </button>
          </Link>
          <Link href={`${params.track}/q5`}>
            <button className="py-4 px-8 bg-gradient-to-r from-[#00616C] to-[#16bacc] text-white rounded-md font-semibold">
              Q5
            </button>
          </Link>
        </div>
        <div className="flex">
          <Description data={data} />
          <div className="mt-2 hidden lg:block relative ">
            <div className="gap-x-4  flex flex-col gap-y-2 sticky top-28 justify-center pb-5">
              <Link href={`${params.track}/q4`}>
                <button className="py-8 px-4 bg-gradient-to-r from-[#00616C] to-[#16bacc] text-white rounded-l-2xl font-semibold ">
                  Q4
                </button>
              </Link>
              <Link href={`${params.track}/q5`}>
                <button className="py-8 px-4 bg-gradient-to-r from-[#00616C] to-[#16bacc] text-white rounded-l-2xl font-semibold">
                  Q5
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
