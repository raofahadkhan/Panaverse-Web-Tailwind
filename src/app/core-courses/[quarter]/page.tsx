import Description from "@/components/shared/Description";
import Hero from "@/components/widgets/Hero";
import { CompulsaryQuarterData } from "@/Data/data";
import { quarterData } from "@/Data/types";
import Link from "next/link";
import { FC } from "react";

function getData(id: string) {
  const res = CompulsaryQuarterData.find((ele) => {
    if (ele.id === id) {
      return ele;
    }
  });

  return res;
}

export function generateStaticParams() {
  const data = CompulsaryQuarterData;

  return data.map((ele) => ({
    quarter: ele.id,
  }));
}

function Page({ params }: { params: { quarter: string } }) {
  const data = getData(params.quarter);

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
          title="Core Track"
          header="Common in All Specializations"
          description="Every Participant of the program will cover the following 3 quarters"
          buttonText="Enroll Now"
          img={true}
          bgcolor="black"
        />
        <div className="flex gap-x-4 gap-y-2 mt-2 justify-center md:hidden">
          <Link href="/core-courses/q1">
            <button className="py-4 px-8 bg-gradient-to-r from-[#00616C] to-[#16bacc] text-white rounded-md font-semibold">
              Q1
            </button>
          </Link>
          <Link href="/core-courses/q2">
            <button className="py-4 px-8 bg-gradient-to-r from-[#00616C] to-[#16bacc] text-white rounded-md font-semibold">
              Q2
            </button>
          </Link>
          <Link href="/core-courses/q3">
            <button className="py-4 px-8 bg-gradient-to-r from-[#00616C] to-[#16bacc] text-white rounded-md font-semibold">
              Q3
            </button>
          </Link>
        </div>
        <div className="flex">
          <Description data={data} />
          <div className="mt-2 hidden md:block relative ">
            <div className="gap-x-4  flex flex-col gap-y-2 sticky top-28 justify-center pb-5">
              <Link href="/core-courses/q1">
                <button className="py-8 px-4 bg-gradient-to-r from-[#00616C] to-[#16bacc] text-white rounded-l-2xl font-semibold ">
                  Q1
                </button>
              </Link>
              <Link href="/core-courses/q2">
                <button className="py-8 px-4 bg-gradient-to-r from-[#00616C] to-[#16bacc] text-white rounded-l-2xl font-semibold">
                  Q2
                </button>
              </Link>
              <Link href="/core-courses/q3">
                <button className="py-8 px-4 bg-gradient-to-r from-[#00616C] to-[#16bacc] text-white rounded-l-2xl font-semibold">
                  Q3
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
