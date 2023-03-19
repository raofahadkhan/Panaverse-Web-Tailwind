import Description from "@/components/shared/Description";
import Hero from "@/components/widgets/Hero";
import { CompulsaryQuarterData } from "@/Data/data";
import { quarterData } from "@/Data/types";
import { FC } from "react";

function getData(id: string) {
  const res = CompulsaryQuarterData.find((ele) => {
    if (ele.id === id) {
      return ele;
    }
  });

  return res;
}

function Page({ params }: { params: { quarter: string } }) {
  const data = getData(params.quarter);

  if (!data) {
    return <div>Page Not Found</div>;
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
        <Description data={data} />
      </div>
    </>
  );
}

export default Page;
