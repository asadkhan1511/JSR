// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../released.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

import { useEffect, useState } from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { BACKEND_URL } from "../../config";

const ReleasedProjects = () => {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const response = await fetch(`${BACKEND_URL}/RProject`);
    const data = await response.json();
    setLoading(false);
    setArray(data);
  };
  useEffect(() => {
    fetchProducts();
  });

  const DeleteCard = (item) => {
    let Deleteurl;
    console.log(item);

    Deleteurl = `${BACKEND_URL}/RProject/${item._id}`;

    axios
      .delete(Deleteurl)
      .then(() => {
        fetchProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(array);
  return (
    <>
      <div>
        <div className="text-center pt-20 lg:pt-28 text-4xl lg:text-6xl tracking-[2px]  lg:tracking-[6px] pb-10 lg:pb-20 ">
          RELEASED PROJECTS
          <Link to={`/add/release`}>
            <AiOutlineVideoCameraAdd
              size={38}
              color="blue"
              className="inline-block"
            />
          </Link>
        </div>
        {/* <div className="md:flex hidden justify-center gap-5 pt-20 flex-wrap"></div> */}
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper p-2"
      >
        {loading
          ? [1, 2, 3, 4].map((index) => (
              <SwiperSlide key={index}>
                <SkeletonCard />
              </SwiperSlide>
            ))
          : array.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="">
                    {" "}
                    <Card data={item} type="R" />
                    <div className=" flex gap-5 items-center mt-5">
                      {" "}
                      <RiDeleteBin6Fill
                        className="text-red-500 w-10 h-10  ml-9 scale-100 hover:scale-125 cursor-pointer"
                        onClick={() => {
                          DeleteCard(item);
                        }}
                      />
                      <Link to={`/update/${item?._id}`}>
                        <TbEdit className="text-blue-500 w-10 h-10  mr-9 scale-100 hover:scale-125" />
                      </Link>{" "}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
      </Swiper>
      {/* <>
        {array.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </> */}
    </>
  );
};

export default ReleasedProjects;
