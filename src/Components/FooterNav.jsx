import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <>
      <div className=" md:flex md:flex-col px-5 md:px-[50px] lg:px-[100px] items-center justify-center  absolute w-[100%] h-72 md:h-52 flex opacity-95 bg-black pt-2 text-white">
        <div className="flex flex-col md:flex-row items-center lg:gap-32 xl:gap-96 ">
          <div className="w-[100px] h-[50px] flex items-center justify-center lg:h-[80px] pb-8  lg:pb-0">
            <Link to="/">
              <img
                className="w-12 h-14"
                src="https://cdn.discordapp.com/attachments/1078905801017659432/1099960093216354415/JSR_logo.png"
                alt=""
              />
            </Link>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row justify-center items-center lg:text-lg tracking-[2px]  lg:w-[700px] xl:w-[900px] lg:tracking-[3px] gap-3 md:gap-12 lg:gap-14 xl:gap-16 lg:pl-16  text-white">
              <Link to="/">
                <li className="hover:scale-125 hover:opacity-50 duration-200">
                  HOME
                </li>
              </Link>
              <Link to="/services">
                <li className="hover:scale-125 hover:opacity-50 duration-200">
                  SERVICES
                </li>
              </Link>
              <Link to="/member">
                <li className="hover:scale-125 hover:opacity-50 duration-200">
                  TEAM
                </li>
              </Link>

              <Link to="/rentals">
                <li className="hover:scale-125 hover:opacity-50 duration-200">
                  RENTALS
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:scale-125 hover:opacity-50 duration-200">
                  CONTACT
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNav;
