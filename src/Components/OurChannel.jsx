import React from "react";
const OurChannel = () => {
  return (
    <div className="py-20 flex flex-col text-center  ">
      <h1 className="text-5xl md:text-5xl lg:text-7xl  tracking-[2px]  lg:tracking-[6px]  py-10">
        OUR CHANNELS
      </h1>
      <p className="font2 py-2  lg:py-1 lg:mt-0 w-[320px] md:w-[550px] text-gray-900 lg:w-[800px] lg:text-[14px] tracking-wide leading-7 " >
        JSR Production House offers a variety of production services and have
        YouTube channels, JSR Production House, JSR Record Label and JSR Records
        Regional. Our channel is packed with diverse recreational content that
        highlights local and national talent in movies, music videos, and TV
        shows.
      </p>
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
