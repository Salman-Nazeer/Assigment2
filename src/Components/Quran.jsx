import React from "react";
import Minar from "../assets/Section1/shape-300x66.png.svg";

const Quran = () => {
  return (
    <div className="bg-[#E8F2F8] text-[#0D6CAC] py-10">
      <div className="container mx-auto flex flex-col items-center px-5 gap-7">
        <div className="flex flex-col items-center gap-3">
          <img src={Minar} alt="" className="w-full sm:w-[350px]" />
          <h1 className="font-bold text-[33.6px] leading-[47.04px] sm:text-[28px] sm:leading-[40px] md:text-[36px] md:leading-[50px] text-center">
            Quranic Verse of the Day
          </h1>
          <p className="font-normal text-base leading-[5px] sm:text-[14px] text-center">
            Surah Al-Isra, Verse 37
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="font-bold text-base leading-[27.2px] sm:text-[16px] sm:leading-[24px] md:text-[18px] md:leading-[28px] text-center">
            وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّكَ لَن تَخْرِقَ الْأَرْضَ
            وَلَن تَبْلُغَ الْجِبَالَ طُولًا
          </p>
          <p className="font-normal text-center leading-[27.2px] sm:text-[14px] sm:w-full md:w-[75%]">
            And do not walk on the earth arrogantly. Surely you can neither
            crack the earth nor stretch to the height of the mountains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quran;
