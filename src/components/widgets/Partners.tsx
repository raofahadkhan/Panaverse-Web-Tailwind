import Image from "next/image";
import React from "react";
import Panacloud from "@/assests/images/panacloudLogo.png";
import Saylani from "@/assests/images/saylaniLogo.png";

function Partners() {
  return (
    <div className="w-full bg-[#1f1f1f]">
      <div className=" w-[1300px] xl:w-[90%] lg:w-[95%] m-auto">
        <h1 className="text-3xl font-semibold text-[#f1f1f1] text-center py-5 drop-shadow-lg tracking-widest  border-b border-zinc-800">
          Strategic Partners
        </h1>
        <div className="flex items-center justify-center gap-10 md:gap-5 py-10 md:py-5">
          <Image
            src={Saylani}
            alt="saylani"
            width={300}
            className="md:w-[150px] "
          />
          <Image
            src={Panacloud}
            alt="Panacloud"
            width={150}
            className="md:w-[100px] "
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
