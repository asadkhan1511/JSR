import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  duration: 1200,
});

const Rental = () => {
  return (
    <div>
      <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        <h1 className="text-2xl lg:text-6xl text-center bg-black text-white pt-5 lg:pt-2 pb-8 lg:pb-20">
          Professional Cameras
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-20">
          {/* <img
            src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693310137/IMG20230601130958_fhcudh.jpg"
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[400px] xl:h-[420px]"
            data-aos="fade-up"
          /> */}
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 lg:pt-2 pb-8 lg:pb-20">
            <h1>ARRI</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693310136/IMG20230601130923_hakz8v.jpg"
              alt=""
              className="w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 lg:pt-2 pb-8 lg:pb-20">
            <h1>SONY</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693310131/sony-venice2-kit_ffsb3h.jpg"
              alt=""
              className="w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
        </div>
        <h1 className="text-2xl lg:text-6xl text-center bg-black text-white pt-5 pb- lg:pt-14 lg:pb-16">
          Lighting System
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-8">
          <div className="text-xl lg:text-3xl text-center  bg-black text-white pt-5 ">
            <h1>APURTURE NOVA</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693374607/aputure-india-tiyana-nova-p300c-003-1000x667-1_vkw37k.webp"
              alt=""
              className="w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 ">
            <h1>ARRI SKYPANEL</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693374062/Screenshot-2023-05-09-at-1.17.04-PM_syjghk.jpg"
              alt=""
              className="object-cover w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 space-y-5">
            <h1>GODOX LED</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693374236/P600Bi-lifestyle-image-13-1280x720_ed3zdp.webp"
              alt=""
              className="w-[320px] h-[300px]object-cover md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
        </div>

        <h1 className="text-2xl lg:text-6xl text-center bg-black text-white  pt-10 pb-5 lg:pt-24 lg:pb-10 ">
          Accomodations
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-20">
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 ">
            <h1>JSR CONTINENTAL</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693375377/hotel-jsr-continental_nk20b9.jpg"
              alt=""
              className="object-cover w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 space-y-5">
            <h1>JSR INN</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693375380/Entrance_zjsfv0.jpg"
              alt=""
              className="w-[320px] h-[300px] object-fill md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
        </div>

        <h1 className="text-2xl lg:text-6xl text-center bg-black text-white  pt-10 pb-5 lg:pt-24 lg:pb-10 ">
          MISCELLANEOUS{" "}
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-8 ">
        
        <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 space-y-5">
            <h1>STUDIOS</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693376484/WhatsApp_Image_2023-08-01_at_16.25.29_ffcdes.jpg"
              alt=""
              className="w-[320px] h-[300px] object-fill md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white pt-5 space-y-5">
            <h1>LUXURY CARS</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693658575/f_ppskq9.png"
              alt=""
              className="w-[320px] object-fill h-[300px]  md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
          <div className="text-xl lg:text-3xl text-center bg-black text-white space-y-5 pt-5 ">
            <h1>VANITY VANS{" "}</h1>
            <img
              src="https://res.cloudinary.com/djb3n17c0/image/upload/v1693376238/kerala_caravan_tourism_a3tucu.jpg"
              alt=""
              className="object-cover w-[320px] h-[300px] md:w-[600px] lg:w-[300px] lg:h-[320px] xl:w-[450px] xl:h-[420px]"
              data-aos="fade-up"
            />
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default Rental;
