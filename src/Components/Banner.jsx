import React from "react";

const Banner = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-10 md:gap-14 px-4">
      {/* Bismillah */}
      <div className="text-white">
        <p className="font-light text-2xl md:text-3xl lg:text-4xl leading-tight">
          بسم الله الرحمن الرحيم
        </p>
      </div>

      {/* Title and Subtitle */}
      <div className="flex flex-col gap-6 md:gap-10 items-center">
        <h1 className="font-black text-[32px] leading-[30px] md:text-[48px] md:leading-[40px] lg:text-[64px] lg:leading-[47.6px] text-[#FFCB00] text-center">
          مركز نوربوتن الإسلامي
        </h1>
        <p className="font-medium text-[20px] md:text-[28px] lg:text-[36px] leading-[24px] md:leading-[32px] lg:leading-[35.84px] text-[#ECECEC] text-center">
          Norrbottens Islamiska Center
        </p>
      </div>

      {/* Description */}
      <div className="text-[#ECECEC] w-full max-w-[979px] text-center px-4 md:px-0">
        <p className="font-semibold text-[14px] leading-[20px] md:text-[16px] md:leading-[27.2px]">
          Norrbottens Islamiska Center represents a Muslim community living in
          the northern county of Sweden, Norrbotten.
        </p>
      </div>
    </div>
  );
};

export default Banner;
