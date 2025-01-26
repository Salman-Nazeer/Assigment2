import React from "react";
import LOGO from "../assets/footer/NIC-LOGO-1-300x281.png.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const menuItem = [
    { label: "Home", link: "/", active: true },
    { label: "About NIC", link: "/about" },
    { label: "The Masjid", link: "/masjid" },
    { label: "Education", link: "/education" },
    { label: "Team", link: "/team" },
    { label: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="footer-background-image text-[#073D62] py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-32">
        {/* Left Section */}
        <div className="flex flex-col items-center gap-10 md:gap-16">
          {/* Responsive logo size */}
          <img
            src={LOGO}
            alt="NIC Logo"
            className="w-24 h-auto mb-2 sm:w-28 md:w-32 lg:w-36"
          />
          {/* Prevent text from wrapping and keep it on one line */}
          <p className="text-xs sm:text-sm lg:text-base text-center whitespace-nowrap">
            © 2023 thenic.se
          </p>
        </div>

        {/* Middle Section (Menu) */}
        <div className="flex flex-col gap-8 items-center">
          <ul className="flex flex-col justify-center items-center gap-2 text-sm">
            {menuItem.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className={`hover:text-[#FFD700] ${
                    item.active ? "font-bold underline" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="mt-4 md:mt-0 bg-transparent text-md font-semibold border px-4 py-2 rounded-md hover:bg-white hover:text-blue-600">
            SUPPORT
          </button>
        </div>

        {/* Right Section (Social and Contact) */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold mb-2">FOLLOW US</h1>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-center whitespace-nowrap mt-2">Email: contact@thenic.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
