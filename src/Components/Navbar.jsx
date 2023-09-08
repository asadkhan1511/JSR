import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiBars2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ navColor, navBgColor, absolute, bar }) => {
  const [nav, setNav] = useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  const DrawerRight = () => setOpenRight(!openRight);
  const {logout,isAuthenticated } = useAuth0();
  return (
    <>
      {/* mobile nav */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-5 lg:mb-0 mb-[-20px]">
          <div className="w-[100px] h-[100px] p-1 pt-4 ">
            <Link to="/">
              <img
                className="w-10 h-12"
                src="https://cdn.discordapp.com/attachments/1078905801017659432/1099960093216354415/JSR_logo.png"
                alt=""
              />
            </Link>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="text-white transform rotate-180 mb-6"
          >
            <FaBarsStaggered className={`h-8 w-10 text-black ${bar}`} />
          </div>
        </div>
      </div>
      {nav && (
        <div>
          <ul
            className={`flex flex-col gap-4 text-lg px-10 py-6 tracking-widest ${navBgColor} ${absolute}  z-10 w-full`}
          >
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
      )}

      {/* desk nav */}
      <div className="hidden md:flex md:flex-col px-[100px] relative z-50   pt-2 text-white">
        <div className="flex justify-between items-center">
          <div className="w-[100px] h-[50px] flex items-center lg:h-[80px] ">
            <Link to="/">
              <img
                className="w-12 h-14"
                src="https://cdn.discordapp.com/attachments/1078905801017659432/1099960093216354415/JSR_logo.png"
                alt=""
              />
            </Link>
          </div>
          <div>
            <ul
              className={`flex  lg:text-lg tracking-[2px] lg:tracking-[3px]  md:gap-12 lg:gap-16 xl:gap-20 md:pr-5 lg:pr-8 ${navColor}  `}
            >
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
              <Link to="/metrics">
                <li className="hover:scale-125 hover:opacity-50 duration-200">
                  METRICS
                </li>
              </Link>
              <li>
              {isAuthenticated&&<button className="text-2xl font-2 bg-blue-800 text-white ps-1 pr-1 rounded-md hover:bg-black   " onClick={()=> logout()}>Logout</button>}
              </li>
              {/* <li onClick={DrawerRight}>
                <HiBars2 className="h-10 w-14 -mt-2 hover:scale-125 hover:opacity-50  duration-200" />
              </li> */}
              {/* {insta && } */}
              {/* <div className="w-64 bg-black">
                <h1>JSR PRODUCTION</h1>
              </div> */}
            </ul>
          </div>
        </div>
      </div>
      {openRight && (
        <div className="">
          <React.Fragment>
            <Drawer
              placement="right"
              open={openRight}
              onClose={DrawerRight}
              className="p-4 bg-black opacity-80 absolute"
            >
              <div className="mb-6 flex items-center justify-end ">
                <IconButton variant="text" color="white" onClick={DrawerRight}>
                  <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
              </div>
              <div className="flex flex-col items-center gap-5 justify-center">
                <img
                  src="https://cdn.discordapp.com/attachments/1078905801017659432/1099960093216354415/JSR_logo.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-white tracking-widest text-lg flex flex-col gap-10">
                  JSR PRODUCTION HOUSE
                  <a
                    href="https://www.instagram.com/jsrproductionhouse/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                  >
                    <div>
                      <BsInstagram className="w-8 h-8" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/jsrproductionhouse/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                  >
                    <button className=" font2 w-44 bg-blue-400 text-xs flex justify-center items-center h-7 rounded-md gap-2">
                      <BsInstagram />
                      <p>Follow On Instagram</p>{" "}
                    </button>
                  </a>
                </h1>
              </div>
            </Drawer>
          </React.Fragment>
        </div>
      )}
    </>
  );
};

export default Navbar;
