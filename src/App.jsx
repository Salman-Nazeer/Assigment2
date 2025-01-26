import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Banner from "./Components/Banner";
import Section from "./Components/Section1";
import Ourmisssion from "./Components/Section2";
import Quran from "./Components/Quran";
import Hadith from "./Components/Hadith";
import Gallery from "./Components/Gallery";
import Location from "./Components/Location";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="backgroungImage bg-[#0D6CAC]">
        <Banner />
      </div>
      <Section />
      <Ourmisssion />
      <Quran />
      <Hadith />
      <Gallery />
      <Location />
      <Footer/>
    </>
  );
};

export default App;
