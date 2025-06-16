import React, { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { RiFileAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";

Aos.init({
  duration: 1200,
});

const Service = () => {
  const [a, setA] = useState([]);
  async function get() {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/Service`);
      console.log(data);
      setA(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <div className="bg-black p-5 md:p-12 px-6 pt-5 h-full w-[100%] text-white ">
        <div
          className="flex flex-col justify-center items-center lg:flex-row pb-10 lg:pb-40"
          data-aos="fade-up"
        >
          <img
            src={a[0]?.img}
            alt=""
            className="w-[320px]  md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px]"
          />
          <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
              data-aos="fade-up"
            >
              {a[0]?.mainHeading}
            </h1>

            <Link
              to={`/Services/${a[0]?._id}`}
              className="  bg-blue-800 ps-5 pr-5 text-black text-3xl "
            >
              {/* <RiFileAddFill
                className="inline-block  "
                color="blue"
                size={36}
              /> */}
              +
            </Link>
            <p className="font2 opacity-40 pb-4">{a[0]?.desc}</p>

            <ul className="font2 flex flex-col gap-2">
              <li>
                <h1>{a[0]?.subHeading1}</h1>
              </li>
              <li className="opacity-40">{a[0]?.desc1}</li>
              <li>
                <h1>{a[0]?.subHeading2}</h1>
              </li>
              <li className="opacity-40">{a[0]?.desc2}</li>
              <li>
                <h1>{a[0]?.subHeading3}</h1>
              </li>
              <li className="opacity-40">{a[0]?.desc3}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-center items-center lg:flex-row  pb-10 lg:pb-40">
          <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl  pt-5 lg:pb-5"
              data-aos="fade-up"
            >
              {a[1]?.mainHeading}
              <Link to={`/Services/${a[1]?._id}`}>
                <RiFileAddFill className="inline-block" color="blue" />
              </Link>
            </h1>
            <p className="font2 opacity-40 pb-4">{a[1]?.desc1}</p>
            <ul className="font2 flex flex-col gap-2">
              <li>
                <h1>{a[1]?.subHeading1}</h1>
              </li>
              <li className="opacity-40">{a[1]?.desc1}</li>
              <li>
                <h1>{a[1]?.subHeading2}</h1>
              </li>
              <li className="opacity-40">{a[1]?.desc2}</li>
              <li>
                <h1>{a[1]?.subHeading3}</h1>
              </li>
              <li className="opacity-40">{a[1]?.desc3}</li>
            </ul>
          </div>
          <img
            src={a[1]?.img}
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20 "
            data-aos="fade-up"
          />
        </div>
      </div>
      <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        <div className="flex flex-col justify-center items-center lg:flex-row pb-10 lg:pb-40">
          <img
            src={a[2]?.img}
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px]"
            data-aos="fade-up"
          />
          <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
              data-aos="fade-up"
            >
              {a[2]?.mainHeading}
              <Link to={`/Services/${a[2]?._id}`}>
                <RiFileAddFill className="inline-block" color="blue" />
              </Link>
            </h1>
            <p className="font2 opacity-40 pb-4">{a[2]?.desc}</p>
            <ul className="font2 flex flex-col gap-2">
              <li>
                <h1>{a[2]?.subHeading1}</h1>
              </li>
              <li className="opacity-40">{a[2]?.desc1}</li>
              <li>
                <h1>{a[2]?.subHeading2}</h1>
              </li>
              <li className="opacity-40">{a[2]?.desc2}</li>
              <li>
                <h1>{a[2]?.subHeading3}</h1>
              </li>
              <li className="opacity-40">{a[2]?.desc3}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-center items-center lg:flex-row  pb-10 lg:pb-40">
          <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl  pt-5 lg:pb-5 "
              data-aos="fade-up"
            >
              {a[3]?.mainHeading}
              <Link to={`/Services/${a[3]?._id}`}>
                <RiFileAddFill className="inline-block" color="blue" />
              </Link>
            </h1>
            <p className="font2 opacity-40 pb-4">{a[3]?.desc}</p>
            <ul className="font2 flex flex-col gap-2">
              <li>
                <h1>{a[3]?.subHeading1}</h1>
              </li>
              <li className="opacity-40">{a[3]?.desc1}</li>
              <li>
                <h1>{a[3]?.subHeading2}</h1>
              </li>
              <li className="opacity-40">{a[3]?.desc2}</li>
              <li>
                <h1>{a[3]?.subHeading3}</h1>
              </li>
              <li className="opacity-40">{a[3]?.desc3}</li>
            </ul>
          </div>
          <img
            src={a[3]?.img}
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20  "
            data-aos="fade-up"
          />
        </div>
      </div>
      <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        <div className="flex flex-col justify-center items-center lg:flex-row pb-10 lg:pb-40">
          <img
            src={a[4]?.img}
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px]"
            data-aos="fade-up"
          />
          <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
              data-aos="fade-up"
            >
              {a[4]?.mainHeading}
              <Link to={`/Services/${a[4]?._id}`}>
                <RiFileAddFill className="inline-block" color="blue" />
              </Link>
            </h1>
            <p className="font2 opacity-40 pb-4">{a[4]?.desc}</p>
            <ul className="font2 flex flex-col gap-2">
              <li>
                <h1>{a[4]?.subHeading1}</h1>
              </li>
              <li className="opacity-40">{a[4]?.desc1}</li>
              <li>
                <h1>{a[4]?.subHeading2}</h1>
              </li>
              <li className="opacity-40">{a[4]?.desc2}</li>
              <li>
                <h1>{a[4]?.subHeading3}</h1>
              </li>
              <li className="opacity-40">{a[4]?.desc3}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
