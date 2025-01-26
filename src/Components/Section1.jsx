import React from "react";
import PrayerTiming from "./PrayerTiming";
import FacebookFeeds from "./FacebookFeeds";

const Section = () => {
  return (
    <div className="bg-[#E8F2F8] py-15">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-3/4 container mx-auto">
        <PrayerTiming />
        <FacebookFeeds />
      </div>
    </div>
  );
};

export default Section;
