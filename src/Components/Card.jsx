import axios from "axios";
import React from "react";
import {RiDeleteBin6Fill} from "react-icons/ri";
import {TbEdit} from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = (data) => {

  const DeleteCard = (id) => {
    let Deleteurl;
    // console.log('h')
    // console.log(type)
    if(data.type=="R"){
      Deleteurl = `https://jsr-backend-x7rr.onrender.com/RProject/${id}`;
    }else{
      Deleteurl = `https://jsr-backend-x7rr.onrender.com/Upcoming/${id}`;
    }
     
    axios
      .delete(Deleteurl)
      .then(() => {
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>
      <div className="flex flex-col bg-gray-50  ">
        <a href={data?.data?.link} target="_blank">
          <img
            className="w-60 h-64 md:w-60 md:h-72 xl:w-80 xl:h-[400px]"
            src={data?.data?.img}
            alt=""
          />
        </a>
        {/* <div></div> */}
        <p className="font2 pt-2 pb-4   lg:pt-2  self-center w-56 lg:w-60 xl:w-72 flex flex-col gap-2  ">
          <li className="font-bold text-lg  ">{data?.data?.title}</li>
          <div className="flex  flex-col pt-2 text-base  justify-start items-start  w-96 h-24 ">
            {data?.data?.producer && <li className=" text-center   ">
              <span className="font-semibold">Producer : </span>
              {data?.data?.producer}
            </li>}
            <li className=" ">
              {" "}
              <span className="font-semibold">Director : </span>
              {data?.data?.director}
            </li>
            {data?.data?.dop ? (
              <li className="  ">
                {" "}
                <span className="font-semibold ">DOP : </span>
                {data?.data?.dop}
              </li>
            ) : null}
            <div className="flex flex-row justify-between">
            <RiDeleteBin6Fill className="text-red-500 w-10 h-10  ml-9 scale-100 hover:scale-125 cursor-pointer" onClick={() => {
                DeleteCard(data?.data?._id);
              }}/>
              <Link
              to={`/update/${data?.data?._id}`}
            >
              <TbEdit className="text-blue-500 w-10 h-10  mr-9 scale-100 hover:scale-125" />
            </Link>
            </div>
          </div>
        </p>
      </div>
    </>
  );
};

export default Card;
