import React from "react";
import Misiion from "../assets/Our-Mission/pic1-768x768.png.svg";

const Ourmisssion = () => {
  return (
    <div className="w-full py-16 bg-[#0D6CAC] flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center gap-8 text-[#E8F2F8] text-center">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="font-extrabold text-[28px] md:text-[34px] leading-[47.6px]">
              Our Mission
            </h1>
            <p className="font-normal text-[14px] md:text-[16px] leading-[24px] md:leading-[27.2px]">
              Based on the statement of God Almighty, “O people! We created you
              all from a male and a female, and we made you into nations and
              tribes so that you may know one another” (Surah Al Hujrat Ayah
              13). The Islamic Center (NIC) plays a vital and holistic role in
              bringing the views of the different spectrums of Islamic society
              together by creating a common language of dialogue without
              violating the right Islamic rules.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <h3 className="font-extrabold text-[20px] md:text-[27.2px] leading-[28px] md:leading-[38.08px]">
              We need your support to start building the masjid this year
            </h3>
            <p className="font-medium text-[14px] md:text-[16px] leading-[24px] md:leading-[27.2px] text-[#FFCB00]">
              Please help us with your donations on our donation website
            </p>
            <button className="bg-[#FFCB00] cursor-pointer text-blue-900 font-bold text-[12px] md:text-[14px] leading-[18px] px-6 py-2 rounded-full hover:bg-yellow-400 transition">
              Donate Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <img
            src={Misiion}
            alt="Our Mission"
            className="w-full max-w-[20rem] md:max-w-[30rem] rounded-md"
          />
          <p className="text-[#E8F2F8] font-bold text-[18px] md:text-[22.4px] leading-[24px] md:leading-[27.2px] mt-4">
            Salatul Eid on 1st of May 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourmisssion;
