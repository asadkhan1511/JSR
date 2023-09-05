import React from "react";

const SkeletonCard = () => {
  return (
    <>
      <div className="flex flex-col animate-pulse bg-gray-50">
        <div className="w-60 h-64 md:w-60 md:h-72 xl:w-80 xl:h-[400px]">
          <div className="w-60 h-64 md:w-60 md:h-72 xl:w-80 xl:h-[400px]  bg-gray-300"></div>
        </div>

        <p className="font2 pt-2 pb-4  lg:pt-2 text-center self-center w-56 lg:w-60 xl:w-72">
          <li className="h-4 bg-gray-300 rounded w-3/4"></li>
          <div className="flex items-start flex-col pt-2 text-base">
            <li className=" h-4 bg-gray-300 rounded w-1/2 mt-2"></li>
            <li className=" h-4 bg-gray-300 rounded w-3/4 mt-2"></li>
          </div>
        </p>
      </div>
    </>
  );
};

export default SkeletonCard;
