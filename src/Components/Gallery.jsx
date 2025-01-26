import React from "react";
import img1 from "../assets/Gallery/a.jpg.svg";
import img2 from "../assets/Gallery/aaaaaaaaaa.jpg.svg";
import img3 from "../assets/Gallery/b.jpg.svg";
import img4 from "../assets/Gallery/eeeee-1.jpg.svg";
import img5 from "../assets/Gallery/f-1.jpg.svg";
import img6 from "../assets/Gallery/g-1.jpg.svg";
import img7 from "../assets/Gallery/h-1.jpg.svg";
import img8 from "../assets/Gallery/i.jpg.svg";
import img9 from "../assets/Gallery/j.jpg.svg";
import img10 from "../assets/Gallery/k.jpg.svg";
import img11 from "../assets/Gallery/m.jpg.svg";
import img12 from "../assets/Gallery/n.jpg.svg";
import img13 from "../assets/Gallery/p.jpg.svg";
import img14 from "../assets/Gallery/l.jpg.svg";

const Gallery = () => {
  const image = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  return (
    <div className="px-10 lg:px-28 py-14 flex flex-col items-center gap-10 text-[#0D6CAC]">
      <h1 className="font-bold text-[34px] leading-[47.6px]">Gallery</h1>
      <div className="container mx-auto">
        {/* Responsive grid with 1 column for small screens, 2 columns for medium, and 4 columns for larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {image.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
