import { Swiper, SwiperSlide } from "swiper/react";
import {RiDeleteBin6Fill} from "react-icons/ri";
import axios from 'axios';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../released.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";

const Hero = () => {
  const [array, setArray] = useState([]);
  const [msg, setMsg] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const deleteVideo = async (id) => {
    await axios.delete(`https://jsr-backend-x7rr.onrender.com/Video/${id}`);
    setMsg(true);
    setTimeout(()=>{
      setMsg(false);
    },3000);
    setRefresh((prev)=>!prev);
  }

  const handleUploadedImage = async (imageUrl, thumbnailUrl) => {
    console.log(imageUrl)
    try {
      const response = await axios.post('https://jsr-backend-x7rr.onrender.com/Video/', {
        link: imageUrl
      });
      // console.log('Data:', response.data);
    } catch (error) {
      console.error('There was an error posting the data', error);
    }
    setRefresh((prev)=>!prev);
  };

  const uploadVideo = async () => {
    try {
      const response = await axios.post('https://jsr-backend-x7rr.onrender.com/Video/', {
        link: vid
      });
      // console.log('Data:', response.data);
    } catch (error) {
      console.error('There was an error posting the data', error);
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://jsr-backend-x7rr.onrender.com/Video"
      );
      const data = await response.json();
      setArray(data);
    };
    fetchProducts();
  }, [refresh]);
  return (
    <>
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 45000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {
      array.map((item, index)=>{
        return(
        <SwiperSlide key={index}>
        <div className="flex flex-col w-full justify-center">
          <video
            className="w-full h-[300px] md:w-full lg:w-full lg:h-[800px] -mt-14"
            src={item?.link}
            alt={index.toString()}
            autoPlay
            loop
            muted
          />

          <div className="flex justify-center">
          <RiDeleteBin6Fill className="text-red-500 w-10 h-10 scale-100 hover:scale-125 cursor-pointer justify-center " onClick={() => {
                deleteVideo(item?._id);
              }}/>
          </div>
          
        </div>
        
      </SwiperSlide>
        )
      })
    }
    {msg &&
    <div className="flex justify-center text-green-600">*Video deleted Successfully</div>
    }
    </Swiper>
    <div className="flex justify-center gap-10 mt-8 text-xl">
      <div className="">Add New Video:</div>
      <CloudinaryUploadWidget onImageUpload={handleUploadedImage} />
    </div>
    </>
  );
};

export default Hero;
