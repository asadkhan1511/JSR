import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiFileAddFill } from "react-icons/ri";

const OurChannel = () => {
  var [para, setPara] = useState([]);
  const [toggle, settoggle] = useState(true);
  async function get() {
    try {
      const { data } = await axios.get(
        "https://jsr-backend-x7rr.onrender.com/OurChannel"
      );
      console.log(data.para);
      setPara(data.para);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    get();
  }, []);

  function handle(e) {
    para = e.target.value;
    setPara(para);
  }

  async function handleupdate() {
    try {
      settoggle(!toggle);
      console.log(para);
      let data1={para:para}
      const { data } = await axios.put(
        "http://localhost:8000/OurChannel/",
        {para:para}
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="py-20 flex flex-col text-center  ">
      <h1 className="text-5xl md:text-5xl lg:text-7xl  tracking-[2px]  lg:tracking-[6px]  py-10">
        OUR CHANNELS
        <RiFileAddFill
          onClick={()=>settoggle(false)}
          className="inline-block"
          color="blue"
        />
      </h1>
      {/* <p className="" >
        JSR Production House offers a variety of production services and have
        YouTube channels, JSR Production House, JSR Record Label and JSR Records
        Regional. Our channel is packed with diverse recreational content that
        highlights local and national talent in movies, music videos, and TV
        shows.
      </p> */}
      <textarea
      rows={3}

        type="text"
        readOnly={toggle}
        className=" font2 py-2 text-center  lg:py-1 lg:mt-0  w-[320px] md:w-[550px]
       text-gray-900 lg:w-[800px] lg:text-[14px] tracking-wide leading-7 "
        value={para}
        onChange={(e) => handle(e)}
      />
      {!toggle ? (
        <button
          className=" border border-black p-2 font-sans text-1xl bg-blue-400 text-black rounded-lg mt-5 font-bold "
          onClick={handleupdate}
        >
          Update
        </button>
      ) : null}

      <div className=" pt-10  flex  justify-around">
        <div className="cursor-pointer flex gap-4 lg:gap-36 items-center ">
          <div className="hover:scale-125 duration-200">
            <a
              href="https://www.youtube.com/@jsrproductionhouse9127"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/djb3n17c0/image/upload/v1691128687/PRODUCTION-HOUSE_warbtn.png"
                alt="JSR Production House"
                className="w-24 h-24 lg:w-40 lg:h-40 text-red-700"
              />
            </a>
          </div>
          <div className="hover:scale-125 duration-200">
            <a href="https://www.youtube.com/@JSRRECORDLABEL" target="_blank">
              <img
                src="https://res.cloudinary.com/djb3n17c0/image/upload/v1691128688/RECORD-LABEL_gaq31x.png "
                alt="JSR Record Label"
                className="w-24 h-24 lg:w-40 lg:h-40 text-red-700"
              />
            </a>
          </div>
          <div className="hover:scale-125 duration-200">
            <a
              href="https://www.youtube.com/@jsrrecordsregional"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/djb3n17c0/image/upload/v1691128688/RECORDS-REGIONAL_h1dgav.png  "
                alt="JSR Record Label"
                className="w-24 h-24 lg:w-40 lg:h-40 text-red-700"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChannel;
