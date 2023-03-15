import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button className="bg-[#00616C] text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:shadow-lg text-lg font-medium hover:scale-105">
      {text}
    </button>
  );
};

export default Button;
