import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiFileAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Team = () => {
  const [bods, setBods] = useState([]);
  async function get() {
    try {
      const { data } = await axios.get("https://jsr-backend-x7rr.onrender.com/Bod");
      setBods(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      <>
        <div className="bg-black p-5 md:p-12 px-6 h-full w-screen text-white ">
          <div className="flex flex-col-reverse items-center  lg:mx-auto lg:w-[84vw] lg:justify-around lg:flex-row  pb-10 lg:pb-40">
            <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl  pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[0]?.name}<Link to={`/BOD/${bods[0]?._id}`} >
              <RiFileAddFill
                className="inline-block"
                color="blue"
              /></Link>
              </h1>
              {/* <p className="font2 opacity-40 pb-4">
                During production, we provide comprehensive support, including
                camera operation, lighting, sound recording, and on-set
                coordination.
              </p> */}
              <ul className="font2 flex flex-col gap-2 text-grey-900 ">
                <li>{bods[0]?.desig}</li>
                <li className="opacity-40 text-justify ">
                  {bods[0]?.content}
                </li>
                {/* <li>Commercial Advertisement</li>
                <li className="opacity-40">
                  With us, you will receive the most effective and visually
                  appealing advertisements that represent your brand and its
                  goals to the maximum extent—ads that are powerful and
                  unforgettable!
                </li>
                <li>Music Album</li>
                <li className="opacity-40">
                  If you are looking for a highly professional yet affordable
                  voice recording studio, look no further. We’re here to help
                  you with everything from the production of music to creating
                  the best music videos for your songs.
                </li> */}
              </ul>
            </div>
            <img
              src={bods[0]?.img}
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20 object-contain "
              data-aos="fade-up"
            />
          </div>
          {/* <div className="text-2xl lg:text-5xl text-center">BOARD OF DIRECTORS</div> */}
          <div className="text-2xl lg:text-6xl text-center bg-black relative z-50 text-white pb-12 mt-2 pt-16 -mb-4  ">
            BOARD OF DIRECTORS
          </div>

          <div className="flex flex-col justify-around items-center lg:flex-row pb-10 lg:pb-40 ">
            {/* <img
              src="https://cdn.discordapp.com/attachments/1078905801017659432/1099956366891831397/Tarun.png"
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] object-contain"
              data-aos="fade-up"
            /> */}
            <img src={bods[1]?.img} className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] object-contain"></img>
            <div className="md:mr-16 lg:ms-8 px-0 lg:pl-16 lg:leading-7 sm:ps-8 float-right justify-start pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[1]?.name}<Link to={`/BOD/${bods[1]?._id}`} >
              <RiFileAddFill
                className="inline-block"
                color="blue"
              /></Link>
              </h1>
              {/* <p className="font2 opacity-40 pb-4">
                Pre-production is an essential part of the filmmaking process at
                our production house. It is during this phase that we
                meticulously plan, coordinate, and prepare for every aspect of
                the project to ensure its success.
              </p> */}
              <ul className="font2 flex flex-col gap-2">
                {/* <li>Founder/Chairman</li> */}
                <li className="opacity-40  text-justify text-grey-900">
                {bods[1]?.content}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse items-center lg:mx-auto lg:w-[84vw] lg:justify-around lg:flex-row  pb-10 lg:pb-40">
            <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl  pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[2]?.name}<Link to={`/BOD/${bods[2]?._id}`} >
              <RiFileAddFill
                className="inline-block"
                color="blue"
              /></Link>
              </h1>
              {/* <p className="font2 opacity-40 pb-4">
                During production, we provide comprehensive support, including
                camera operation, lighting, sound recording, and on-set
                coordination.
              </p> */}
              <ul className="font2 flex flex-col gap-2">
                {/* <li>Managing Director</li> */}
                <li className="opacity-40  text-justify text-grey-900">
                {bods[2]?.content}
                </li>
                {/* <li>Commercial Advertisement</li>
                <li className="opacity-40">
                  With us, you will receive the most effective and visually
                  appealing advertisements that represent your brand and its
                  goals to the maximum extent—ads that are powerful and
                  unforgettable!
                </li>
                <li>Music Album</li>
                <li className="opacity-40">
                  If you are looking for a highly professional yet affordable
                  voice recording studio, look no further. We’re here to help
                  you with everything from the production of music to creating
                  the best music videos for your songs.
                </li> */}
              </ul>
            </div>
            <img
              src={bods[2]?.img}
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20 object-contain "
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col justify-around items-center sm:ps-14 lg:flex-row pt-5 lg:pb-40 md:mr-16">
            <img
              src={bods[3]?.img}
              alt=""
              className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] object-contain"
              data-aos="fade-up"
            />
            <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-10 leading-0 w-[320px] md:w-[600px]">
              <h1
                className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
                data-aos="fade-up"
              >
                {bods[3]?.name}<Link to={`/BOD/${bods[3]?._id}`} >
              <RiFileAddFill
                className="inline-block"
                color="blue"
              /></Link>
              </h1>
              {/* <p className="font2 opacity-40 pb-4">
                Finally, we offer audio production services, including music
                composition, sound design, and voice-over recording, to ensure
                that the final product has high-quality sound.
              </p> */}
              <ul className="font2 flex flex-col gap-2">
                {/* <li>Managing Director</li> */}
                <li className="opacity-40 text-grey-900 text-justify">
                {bods[3]?.content}
                </li>
                {/* <li>Dubbing & Bg Score</li>
                <li className="opacity-40">
                  Create a professional mix with our sound engineers and
                  equipment. We can create a perfect music mix for you that will
                  go well with your song.
                </li>
                <li>Dubbing & Bg Score</li>
                <li className="opacity-40">
                  Create a memorable background score that reflects your
                  storyline and makes your audience want to watch more.
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Team;
