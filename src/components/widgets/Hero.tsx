import { HeroData } from "@/Data/types";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import HeroImage from "../../assests/images/HeroImageOne.png";
import SegmentImage from "./../../assests/images/segmentImage.png";

import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";

const Hero: FC<HeroData> = ({
  id,
  title,
  header,
  description,
  buttonText,
  img,
  blurEffect,
  bgcolor = "transparent",
}) => {
  let HeroImg: StaticImageData = HeroImage;
  if (id === "segment") {
    HeroImg = SegmentImage;
  }
  return (
    <section
      className={` ${id === "hero" ? "border border-transparent" : ""}  ${
        bgcolor === "black" ? "bg-slate-900 " : "bg-transparent"
      } pb-8`}
    >
      <Wrapper>
        <div className="pb-10">
          <div className="flex flex-col md:flex-row items-center justify-between mx-1 pt-2">
            {/* Left Side */}
            <div className="flex">
              <div className={`${!img ? "" : "max-w-[570px]"} relative`}>
                {blurEffect && (
                  <div className="absolute left-0 md:h-52 md:w-52  bg-[#00616C] blur-[250px] -z-10`"></div>
                )}
                <h4 className="text-[#00616C] font-[Manrope] font-semibold text-lg mt-4 mb-1 ">
                  {title}
                </h4>

                <h1
                  className={`text-3xl md:text-[40px] md:leading-[50px] lg:text-5xl font-bold ${
                    bgcolor === "black" ? "text-white" : "text-gray-900"
                  } whitespace-pre-line`}
                >
                  {header}
                </h1>
                <p
                  className={`mt-6 text-sm sm:text-lg ${
                    bgcolor === "black" ? "text-white" : "text-gray-700"
                  } whitespace-pre-line`}
                >
                  {description}
                </p>

                <div className="mt-6 mb-3">
                  <Button text={buttonText} />
                </div>
                <div></div>
              </div>
            </div>

            {/* right Side */}

            <div className="flex justify-center">
              <div className="mt-8">
                {img && (
                  <Image
                    src={HeroImg}
                    alt="Hero Section Image"
                    className="right-3 h-90 w-[600px]"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
