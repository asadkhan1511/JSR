import Card from "./Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../future.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BACKEND_URL } from "../../config";

const UpcomingProjects = () => {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const response = await fetch(`${BACKEND_URL}/Upcoming`);
    const data = await response.json();
    console.log(data, "=>>>");
    setLoading(false);
    setArray(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(array);
  const DeleteCard = (item) => {
    let Deleteurl;

    Deleteurl = `${BACKEND_URL}/Upcoming/${item._id}`;

    axios
      .delete(Deleteurl)
      .then(() => {
        fetchProducts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="">
        <div className="text-center pt-10 lg:pt-28 z-30 tracking-[2px]  lg:tracking-[6px]  ">
          <h1 className=" text-2xl md:text-lg lg:text-xl pb-2 lg:pb-5">
            JSR PRODUCTION HOUSE
          </h1>

          <h2 className="text-4xl md:text-4xl lg:text-7xl pb-10 lg:pb-20">
            UPCOMING PROJECTS
            <Link to={`/add/upcoming`}>
              <AiOutlineVideoCameraAdd
                size={38}
                color="blue"
                className="inline-block"
              />
            </Link>
          </h2>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
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
                  <div>
                    <Card data={item} type="U" />
                    <div className="flex gap-5 items-center">
                      {" "}
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
                        </Link>
                      </div>
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

export default UpcomingProjects;
