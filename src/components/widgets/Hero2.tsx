import Image from "next/image";
import React from "react";
import HeroImage from "../../assests/images/HeroImageTwo.webp";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import Waves from "../../assests/images/waves-shape.webp";
import BackgroundHero from "../../assests/images/bg-effect.webp";

const Hero2 = () => {
  const para: string =
    "Web 3.0 has the potential to change the internet as we know it forever. You're still early in catching the trend and building your first blockchain application, acquiring the skills to get a high-paying job, or creating your own web 3.0 projects that can make you money. In Web 2.0 all the data is controlled by the Big Tech companies, such as Google, Apple, etc. In the decentralized web, no single person/ company owns any data or information about anyone, and everything is visible to the public. Web3, also known as the decentralized web, is the third and latest phase of the internet. Web3 is built on peer-to-peer networks of computers that  talk to each other without middlemen.";
  return (
    <section className="mx-4 pb-8">
      <Wrapper>
        <div className="flex flex-col lg:flex-row mt-10 items-center relative">
          <div className="absolute top-0 right-10 hidden lg:block">
            <Image src={Waves} alt="waves" />
          </div>
          <div className="flex-1 ml-6 pt-4 md:scale-95 lg:scale-100 ">
            <Image src={HeroImage} alt="Web-3" height={547} width={500} />
            <div className="absolute top-10 -z-10">
              <Image src={BackgroundHero} alt="bg-hero" />
            </div>
          </div>
          <div className="flex-1 pt-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center md:text-start">
              What is Web <span className="text-blue-600">3.0</span>
            </h2>
            <p className="text-base md:text-lg max-w-[577px] text-justify mt-4 ">
              {para}
            </p>
            <div className="mt-5">
              <button className="bg-[#00616C] text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:shadow-lg  text-lg font-medium hover:scale-105">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero2;
