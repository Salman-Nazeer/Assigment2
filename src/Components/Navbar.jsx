import React, { useState } from "react";
import LOGO from "../assets/Navbar-Banner/Logo.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Hamburger and close icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItem = [
    {
      lable: "Home",
      link: "/",
      active: true,
    },
    {
      lable: "About NIC",
      link: "/about",
    },
    {
      lable: "The Masjid",
      link: "/masjid",
    },
    {
      lable: "Education",
      link: "/education",
    },
    {
      lable: "Team",
      link: "/team",
    },
    {
      lable: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <nav className="bg-[#0D6CAC] h-[100px] flex items-center justify-between px-6 md:px-10 border-b-1 border-white">
      {/* LOGO */}
      <div className="flex items-center">
        <img src={LOGO} alt="Logo" className="h-[60px] md:h-full w-auto" />
      </div>

      <div className="flex items-center">
        {/* HAMBURGER MENU ICON (Mobile & Tablet) */}
        <div className="lg:hidden text-white text-3xl cursor-pointer">
          {menuOpen ? (
            <HiX onClick={() => setMenuOpen(false)} /> // Close icon
          ) : (
            <HiOutlineMenu onClick={() => setMenuOpen(true)} /> // Hamburger icon
          )}
        </div>

        {/* MENU + SOCIAL ICONS */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-[113px] left-0 w-full bg-[#0D6CAC] lg:static lg:flex md:w-full md:items-center md:space-x-8`}
        >
          {/* MENU ITEMS */}
          <ul className="flex flex-col items-center space-y-4 py-4 md:flex-col lg:flex-row gap-5">
            {menuItem.map((item, index) => (
              <li
                key={index}
                className="text-white text-md font-medium my-auto"
              >
                <a
                  href={item.link}
                  className={` hover:text-yellow-400 ${
                    item.active ? "text-[#FFCB00]" : ""
                  }`}
                >
                  {item.lable}
                </a>
              </li>
            ))}

            {/* SUPPORT BUTTON */}
            <li>
              <button className="mt-4 md:mt-0 bg-transparent text-md font-semibold border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600">
                SUPPORT
              </button>
            </li>
          </ul>

          {/* SOCIAL ICONS (Visible in Open Menu on Small Screens) */}
          <div className="flex justify-center space-x-4 py-4 text-white text-2xl lg:hidden">
            <FaFacebook className="hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-400 cursor-pointer" />
          </div>
        </div>

        {/* SOCIAL ICONS (Always Visible on Larger Screens) */}
        <div className="hidden lg:flex space-x-4 text-white text-3xl">
          <FaFacebook className="hover:text-yellow-400 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
          <FaYoutube className="hover:text-yellow-400 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
