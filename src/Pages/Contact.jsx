import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import FooterNav from "../Components/FooterNav";
import Service from "../Components/Service";
import { BsTwitter } from "react-icons/bs";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar navColor={"text-black"} />
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
       <div>
        <div className="h-96 w-full bg-slate-200 overflow-hidden">
          <div className="hidden sm:flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.3511855701477!2d78.03621587540034!3d30.28406247480366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092904359ef497%3A0xdbfac6e5851578c1!2sJSR%20Production%20House!5e0!3m2!1sen!2sin!4v1688709674744!5m2!1sen!2sin"
              width="1600"
              height="600"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="sm:hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.3511855701477!2d78.03621587540034!3d30.28406247480366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092904359ef497%3A0xdbfac6e5851578c1!2sJSR%20Production%20House!5e0!3m2!1sen!2sin!4v1688709674744!5m2!1sen!2sin"
              width="480"
              height="384"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col  items-center w-full  px-4 lg:px-12 py-0 lg:py-3">
            <li className=" lg:border-l-[2px] border-slate-100 h-[100%] absolute z-1  left-4 lg:left-20"></li>
            <li className="lg:border-l-[2px] border-slate-100  left-[50%] h-[100%] absolute z-1"></li>
            <li className="lg:border-l-[2px] border-slate-100 h-[100%] absolute z-1 right-4 lg:right-20"></li>
          </ul>

          <ul className="px-5 lg:px-28 pt-10  flex gap-6">
            <li className=" text-3xl md:text-4xl tracking-wide md:tracking-wider">
              ADDRESS:{" "}
            </li>
            <li className="text-lg font2 w-60 md:w-[700px] leading-9 opacity-50">
              Shaheed Gireesh Bhadri Chowk, Mothrowala, Banjarawala Rd, Ajabpur
              Khurd, Dehradun, Uttarakhand 248001
            </li>
          </ul>
          <ul className="px-5 lg:px-28 pt-10 flex gap-6">
            <li className="text-3xl md:text-4xl tracking-wide md:tracking-wider">
              PHONE NO:{" "}
            </li>
            <li className="text-lg font2 w-60 leading-9 opacity-50">
              078303 99111
            </li>
          </ul>

          <div className="p-10 pb-10 lg:pb-20 flex gap-32 lg:flex-row  flex-col items-center justify-center text-5xl lg:text-6xl pt-20 lg:pt-20 leading-14 lg:leading-16 tracking-[4px] lg:tracking-[6px]">
            <>
              <div className="flex flex-col justify-center items-center lg:items-end">
                <div className="w-[300px] lg:w-[450px] p-5 lg:pl-10 lg:p-2 text-center">
                  FOR ANY QUERIES LEAVE US A MESSAGE!
                </div>
                {/* <div className="flex gap-8 w-60   pt-2 lg:pt-8">
                  <a href="https://www.facebook.com/JSRProductionhouse">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                      alt=""
                      className="w-8 h-8 hover:scale-125  duration-200"
                    />
                  </a>
                  <a href="https://www.instagram.com/jsrproductionhouse/?igshid=YmMyMTA2M2Y%3D">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
                      alt=""
                      className="w-8 h-8 hover:scale-125  duration-200"
                    />
                  </a>
                  <a href="https://www.youtube.com/@jsrproductionhouse9127">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                      alt=""
                      className="w-8 h-8 hover:scale-125  duration-200"
                    />
                  </a>
                  <a href="">
                    <BsTwitter className="w-8 h-8 text-blue-500 hover:scale-125  duration-200" />
                  </a>
                </div> */}
              </div>
            </>
            <>
              <div className=" flex flex-col gap-4 items-center lg:pl-16 justify-center ">
                <textarea
                  type="text"
                  placeholder="Type your message"
                  className=" font2 border-2 p-4  text-sm h-32 lg:h-64 lg:w-[560px] md:[450px] w-[300px]"
                />
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 ">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="font2 border-2 p-4 text-sm h-16 w-[300px] lg:w-[260px]"
                  />
                  <input
                    type="number"
                    placeholder="Whatsapp No."
                    className="font2 border-2 h-16 p-4 text-sm  w-[300px] lg:w-[260px]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Your Email"
                  className=" font2 border-2 p-4  text-sm h-16 lg:h-16 lg:w-[560px] md:w-[450px] w-[300px]"
                />
                <a href="#_" class="relative inline-block text-lg group">
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium w-[300px] lg:w-[560px] leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900  group-hover:text-white">
                    <span class="absolute inset-0  w-full h-full px-5 py-3  bg-gray-50"></span>
                    <span class="absolute left-0 w-[600px] h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
                    <span class="relative flex justify-center">Send</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900  group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </>
          </div>
        </div>
      </div>
      <FooterNav />
    </>
  );
};

export default Contact;
