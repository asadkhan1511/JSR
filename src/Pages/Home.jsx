import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import UpcomingProjects from "../Components/UpcomingProjects";
// import OurWork from "../Components/OurWork";
import ReleasedProjects from "../Components/ReleasedProjects";
// import FutureProjects from "../Components/FutureProjects";
import OurChannel from "../Components/OurChannel";
import WorkWithUs from "../Components/WorkWithUs";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Gallery from "../Components/Gallery/Gallery";
import Ventures from "../Components/Ventures";
import { BsTwitter } from "react-icons/bs";
import GalleryAdmin from "../Components/GalleryAdmin/GalleryAdmin";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* <div className="absolute h-52 w-32 flex-col"> */}
      <div className="fixed top-[320px] lg:top-[260px] right-0 h-72 w-10 items-center flex flex-col gap-10 justify-center bg-gray-200 opacity-70 z-50 rounded-tl-md rounded-bl-md    ">
        <a href="https://www.facebook.com/JSRProductionhouse" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
            alt=""
            className="w-7 h-7 hover:scale-125 duration-200 opacity-100"
          />
        </a>
        <a
          href="https://www.instagram.com/jsrproductionhouse/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
            alt=""
            className="w-7 h-7 hover:scale-125  duration-200"
          />
        </a>
        <a href="https://www.youtube.com/@jsrproductionhouse9127" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt=""
            className="w-7 h-7 hover:scale-125  duration-200"
          />
        </a>
        <a href="https://twitter.com/house_jsr?lang=en">
          {/* <BsTwitter className="w-8 h-8 text-blue-500 hover:scale-125  duration-200" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
        </a>
      </div>
      {/* </div> */}
      <div className="inset-1">
        <Navbar navColor={"text-black"} />
      </div>
      <Hero />
      <div>
        <ul className="flex flex-col items-center w-full  px-4 lg:px-20 py-0 lg:py-3 ">
          {/* <li className=" lg:border-l-[2px] border-slate-100 h-[650%]  absolute z-[-1]  left-4 lg:left-20"></li>
          <li className="lg:border-l-[2px] border-slate-100  left-[50%] h-[650%]  absolute z-[-1]"></li>
          <li className="lg:border-l-[2px] border-slate-100 h-[650%] absolute z-[-1] right-4 lg:right-20"></li> */}
          <About />
          <UpcomingProjects />
          <ReleasedProjects />
          {/* <FutureProjects /> */}
          <Gallery />
          <GalleryAdmin />
          <Ventures />
          <OurChannel />
          <WorkWithUs />
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Home;
