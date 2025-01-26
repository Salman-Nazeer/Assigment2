import React from "react";
import SPAN from "../assets/Section1/span.svg";

const PrayerTiming = () => {
  const namzeShedual = [
    {
      name: "Fajr",
      time: "5:00 AM",
    },
    {
      name: "Dhuhr",
      time: "12:00 PM",
    },
    {
      name: "Asr",
      time: "3:00 PM",
    },
    {
      name: "Maghrib",
      time: "6:00 PM",
    },
    {
      name: "Isha",
      time: "8:00 PM",
    },
  ];
  return (
    <div className="border-3 text-[#0D6CAC] border-[#FFCB00] h-96 lg:w-1/3 rounded-t-full flex flex-col items-center pt-9">
      <div className="text-center flex flex-col gap-2">
        <p className="font-normal text-[22.4px] leading-[32px]">
          Prayer Timing
        </p>
        <span className="p-3">
          <img src={SPAN} alt="" className="my-2" />
        </span>
        <p className="font-medium text-[20.8px] leading-[1px]">Luleå</p>
      </div>

      <div className="w-full h-full flex flex-col justify-between px-4 mt-4">
        {namzeShedual.map((item, index) => (
          <div
            key={index}
            className="flex justify-between w-full p-2 font-normal text-[20.8px] leading-[25px] text-[#0D6CAC]"
          >
            <p>{item.name}</p>
            <p>{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerTiming;
