import React from "react";
import Img1 from "../assets/Section1/image1.svg";
import Img2 from "../assets/Section1/image2.svg";
import { FaFacebook } from "react-icons/fa";

const FacebookFeeds = () => {
  const card = [
    {
      image: Img1,
    },
    {
      image: Img2,
    },
  ];
  return (
    <div className="h-96 w-full lg:w-1/2 flex flex-col items-center pt-5">
      <div>
        <h1 className="font-bold text-[33.6px] leading-[47.04px] text-[#0D6CAC]">
          Facebook Feeds
        </h1>
      </div>

      <div className="flex flex-flex p-4 gap-3">
        {card.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center w-full sm:w-1/2 shadow-xl pb-3 rounded-lg"
          >
            <img src={item.image} alt="image" className="rounded-lg" />
            <p className="flex justify-end w-full text-[#3A5795] font-bold text-2xl pr-2">
              <FaFacebook />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacebookFeeds;
