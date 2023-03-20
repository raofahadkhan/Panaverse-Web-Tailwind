import Description from "@/components/shared/Description";
import Hero from "@/components/widgets/Hero";
import { TracksData } from "@/Data/data";
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

function page({
  params,
  searchParams,
}: {
  params: { track: string };
  searchParams: { quarter: string };
}) {
  const data = getData(params.track, searchParams.quarter);

  if (!data) {
    return <div> Page Not Found</div>;
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
      </div>
      <Description data={data} />
    </>
  );
}

export default page;
