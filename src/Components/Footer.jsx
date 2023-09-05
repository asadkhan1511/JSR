import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full h-72 lg:h-44 px-5  bg-black flex flex-col lg:flex-row justify-around items-start lg:items-center">
      <p className="text-white text-4xl lg:text-4xl w-80 lg:w-[800px] tracking-[2px]">
        SEEKING A CAREER IN VIDEO PRODUCTION? SEND US YOUR CV!
      </p>

      <Link to="/contact">
        <button className="bg-white w-[200px] lg:w-[200px] h-14 tracking-[6px] flex items-center justify-center text-black text-lg">
          Learn More!
        </button>
      </Link>
    </div>
  );
};

export default Footer;
