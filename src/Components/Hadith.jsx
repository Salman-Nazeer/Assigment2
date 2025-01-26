import React from "react";
import Minar from "../assets/Section1/shape-300x66.png.svg";

const Hadith = () => {
  return (
    <div>
      <div className="bg-[#E8F2F8] text-[#0D6CAC] py-10">
        <div className="container mx-auto flex flex-col items-center px-5 gap-5">
          <div className="flex flex-col items-center gap-3">
            <img src={Minar} alt="" className="w-full sm:w-[350px]" />
            <h1 className="font-bold text-[33.6px] leading-[47.04px] sm:text-[28px] sm:leading-[40px] md:text-[36px] md:leading-[50px] text-center">
              Hadith of the day
            </h1>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="font-normal text-center leading-[27.2px] sm:text-[14px] sm:w-full md:w-[75%]">
              A man came to the Prophet and asked, “O Allah’s Apostle! Which
              charity is the most superior in reward?” He replied, “The charity
              which you practice while you are healthy, niggardly and afraid of
              poverty and wish to become wealthy. Do not delay it to the time of
              approaching death and then say, ‘Give so much to such and such,
              and so much to such and such.’ And it has already belonged to such
              and such (as it is too late).”
              <br />
              Sahih Bukhari
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hadith;
