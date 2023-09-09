import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  duration: 1200,
});

const Rental = () => {
  return (
    <>
      {/* <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        <h1 className="text-2xl lg:text-6xl text-center bg-black text-white pt-5 lg:pt-2 pb-8 lg:pb-20">
          Professional Cameras
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-20">
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
      </div> */}

       
      <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        {/* <h1 className="text-2xl lg:text-6xl text-start bg-black text-white pt-5 lg:pt-2 pb-8 lg:pb-20">
          Professional Cameras
        </h1> */}
        <h3 className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6">
          Arri Cameras
        </h3>
        <p className="font2 opacity-40 pb-10">
        ARRI cameras are renowned for their image quality, dynamic range, and color science, making them a top choice for many cinematographers and filmmakers in the industry. These cameras are often used in feature films, television shows, commercials, and other high-end productions where image quality is paramount. Additionally, ARRI provides a wide range of accessories and support services to complement their camera systems.
        </p>
        <h3 className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6">
         SONY CAMERAS
        </h3>
        <p className="font2 opacity-40 pb-10">
        A professional cinema camera designed for filmmakers and content creators. Has gained popularity for its combination of compact design, versatility, and high-quality video capabilities.Some key features and specifications of the Sony   professional camera are full-frame 10.2-megapixel Exmor R CMOS sensor, which is known for its low-light performance and dynamic range.Video Resolutions: It can record video in various resolutions, including DCI 4K (4096 x 2160) and UHD 4K (3840 x 2160), at frame rates up to 120 frames per second (fps). It also supports HD recording at up to 240 fps.an impressive ISO range of 800 to 12,800, expandable to 80-409,600, making it suitable for low-light shooting. electronic image stabilization (Active Mode) to help smooth out handheld shots. The camera uses the Sony E-mount, which is compatible with a wide range of Sony and third-party lenses.
        </p>

        <h3 className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6">
        Nova Apurture Light
        </h3>
        <p className="font2 opacity-40 pb-10">
        The Nova P300c is a 300W RGBWW LED Soft Light, and is also the first product in Aputure “Nova” Professional LED Panel product line. The P300c utilizes warm white and cool white LEDs, in addition to the typical RGB chipset used in color-mixing lights. This chipset increases its output, skin tone accuracy, and tonal variety compared to other RGB or RGBW LED fixtures, making it suited for any filmmaking environment. Combining the stellar color quality with an intense output of over 9,000lux at 1 meter, a CCT range of 2,000K-10,000K, and a peak tungsten SSI of 85, the Nova is Aputure’s most versatile light to date.
        </p>
        <h3 className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6">
       ARRI SKYPANEL
        </h3>
        <p className="font2 opacity-40 pb-10">
        The ARRI SkyPanel is a popular and versatile LED soft light fixture used in the film and television industry for professional lighting applications. It is manufactured by ARRI, a renowned German company known for its high-quality film and lighting equipment. The SkyPanel is designed to provide a wide range of color temperature options, precise color control, and soft, even lighting.
        </p>

        <h3 className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6">
       GODOX
        </h3>
        <p className="font2 opacity-40 pb-10">
        GODOX is a well-known brand in the photography and lighting industry, and they produce a wide range of photography and lighting equipment, including LED lights. LED lights by GODOX are popular among photographers and videographers for their versatility, quality.GODOX also offers LED lights with RGB (Red, Green, Blue) color capabilities. These lights can produce a wide range of colors, making them great for creative lighting effects, color gels, or creating dynamic and colorful backgrounds.
        </p>


        </div>









    </>
  );
};

export default Rental;
