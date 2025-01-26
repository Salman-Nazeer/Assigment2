import React from "react";

const Location = () => {
  return (
    <div className="bg-[#0D6CAC] p-6 md:p-10">
      <div className="container px-6 md:px-20 mx-auto my-10">
        <h1 className="text-xl md:text-3xl font-bold text-center mb-6 text-[#E8F2F8]">
          Our Location
        </h1>
        <div className="relative text-right w-full h-[300px] sm:h-[400px] lg:h-[500px] mx-auto">
          <div className="overflow-hidden bg-none w-full h-full">
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=UIT&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
