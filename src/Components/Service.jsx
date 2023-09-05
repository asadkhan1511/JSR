import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  duration: 1200,
});

const Service = () => {
  return (
    <>
      <div className="bg-black p-5 md:p-12 px-6 pt-5 h-full w-[100%] text-white ">
        <div
          className="flex flex-col items-center lg:flex-row pb-10 lg:pb-40"
          data-aos="fade-up"
        >
          <img
            src="https://res.cloudinary.com/djb3n17c0/image/upload/v1691129330/what-is-pre-production-in-film-1920x1080_bupcxj.jpg"
            alt=""
            className="w-[320px]  md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px]"
          />
          <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
              data-aos="fade-up"
            >
              PRE-PRODUCTION
            </h1>
            <p className="font2 opacity-40 pb-4">
              Pre-production is an essential part of the filmmaking process at
              our production house. It is during this phase that we meticulously
              plan, coordinate, and prepare for every aspect of the project to
              ensure its success.
            </p>
            <ul className="font2 flex flex-col gap-2">
              <li><h1>Story and Scriptwriting</h1></li>
              <li className="opacity-40">
                Have a story concept but are unsure about how to present it on
                screen? Don’t worry, we have your back. With our storytelling,
                your story will make people all the emotions you wanna portray
                and jump out of their seats with excitement.
              </li>
              <li><h1>Screenplay</h1></li>
              <li className="opacity-40">
                Professional screenwriters will work with you every step of the
                way, from dialogue, scenes, and sequences to execution strategy,
                until your vision becomes a reality!
              </li>
              <li><h1>Storyboarding</h1></li>
              <li className="opacity-40">
                Get a close look at your work through a storyboard made for your
                script, which includes a shot-by-shot sequence, placements, and
                direction elements: a visual representation of your story plan.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center lg:flex-row  pb-10 lg:pb-40">
          <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl  pt-5 lg:pb-5"
              data-aos="fade-up"
            >
              PRODUCTION
            </h1>
            <p className="font2 opacity-40 pb-4">
              During production, we provide comprehensive support, including
              camera operation, lighting, sound recording, and on-set
              coordination.
            </p>
            <ul className="font2 flex flex-col gap-2">
              <li><h1>Filming</h1></li>
              <li className="opacity-40">
                We specialize in producing and directing award-winning films.
                Our outstanding team will work and bring your story to life in
                the most beautiful way!
              </li>
              <li><h1>Commercial Advertisement</h1></li>
              <li className="opacity-40">
                With us, you will receive the most effective and visually
                appealing advertisements that represent your brand and its goals
                to the maximum extent—ads that are powerful and unforgettable!
              </li>
              <li><h1>Music Album</h1></li>
              <li className="opacity-40">
                If you are looking for a highly professional yet affordable
                voice recording studio, look no further. We’re here to help you
                with everything from the production of music to creating the
                best music videos for your songs.
              </li>
            </ul>
          </div>
          <img
            src="https://res.cloudinary.com/djb3n17c0/image/upload/v1691129657/WhatsApp_Image_2023-08-01_at_16.25.27_ujalak.jpg"
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20 "
            data-aos="fade-up"
          />
        </div>
      </div>
      <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        <div className="flex flex-col items-center lg:flex-row pb-10 lg:pb-40">
          <img
            src="https://res.cloudinary.com/djb3n17c0/image/upload/v1691129766/video-post-production-1982x1114-2_uaakdt.jpg"
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px]"
            data-aos="fade-up"
          />
          <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
              data-aos="fade-up"
            >
              POST-PRODUCTION
            </h1>
            <p className="font2 opacity-40 pb-4">
              Pre-production is an essential part of the filmmaking process at
              our production house. It is during this phase that we meticulously
              plan, coordinate, and prepare for every aspect of the project to
              ensure its success.
            </p>
            <ul className="font2 flex flex-col gap-2">
              <li><h1>Story and Scriptwriting</h1></li>
              <li className="opacity-40">
                Have a story concept but are unsure about how to present it on
                screen? Don’t worry, we have your back. With our storytelling,
                your story will make people all the emotions you wanna portray
                and jump out of their seats with excitement.
              </li>
              <li><h1>Screenplay</h1></li>
              <li className="opacity-40">
                Professional screenwriters will work with you every step of the
                way, from dialogue, scenes, and sequences to execution strategy,
                until your vision becomes a reality!
              </li>
              <li><h1>Storyboarding</h1></li>
              <li className="opacity-40">
                Get a close look at your work through a storyboard made for your
                script, which includes a shot-by-shot sequence, placements, and
                direction elements: a visual representation of your story plan.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center lg:flex-row  pb-10 lg:pb-40">
          <div className="px-0 lg:pr-4 lg:pl-5 lg:leading-7 pt-5 md:pt-8 lg:pt-16 leading-0 w-[320px] md:w-[600px] lg:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl  pt-5 lg:pb-5 "
              data-aos="fade-up"
            >
              VIRTUAL PRODUCTION
            </h1>
            <p className="font2 opacity-40 pb-4">
              Our Virtual Production services harness the latest technology and
              innovation to create immersive and captivating experiences for
              your projects. With a seamless blend of the physical and virtual
              realms, we bring your visions to life like never before.
            </p>
            <ul className="font2 flex flex-col gap-2">
              <li><h1>Virtual Sets and Environments</h1></li>
              <li className="opacity-40">
                Our skilled team of artists and technicians design and create
                virtual sets and environments that perfectly complement your
                storyline. Whether it's historical locations, futuristic
                landscapes, or fantasy worlds, we can visualize
                and build it all.
              </li>
              <li><h1>Virtual Cameras and Cinematography</h1></li>
              <li className="opacity-40">
                Our team of experienced cinematographers utilizes virtual
                cameras to capture dynamic shots within the virtual environment,
                enhancing the visual storytelling of your project.
              </li>
              <li><h1>Game Engine Technology</h1></li>
              <li className="opacity-40">
                We utilize powerful game engine technology to create dynamic and
                immersive virtual worlds, resulting in higher fidelity and more
                engaging experiences.
              </li>
            </ul>
          </div>
          <img
            src="https://res.cloudinary.com/djb3n17c0/image/upload/v1691060860/gfsxgfs_ipg5pm.jpg"
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px] lg:ml-16 xl:ml-20  "
            data-aos="fade-up"
          />
        </div>
      </div>
      <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        <div className="flex flex-col items-center lg:flex-row pb-10 lg:pb-40">
          <img
            src="https://res.cloudinary.com/djb3n17c0/image/upload/v1691130223/ArcLight_Cinemas_Sherman_Oaks_StoryWall_Digital_Posters_mawqdh.jpg"
            alt=""
            className="w-[320px] md:w-[600px] lg:w-[430px] lg:h-[400px] xl:w-[650px] xl:h-[420px]"
            data-aos="fade-up"
          />
          <div className="px-0 lg:pl-16 lg:leading-7 pt-0 lg:pt-5 leading-0 w-[320px] md:w-[600px]">
            <h1
              className=" text-2xl lg:text-5xl pt-5 lg:pb-5"
              data-aos="fade-up"
            >
              MARKETING AND DISTRIBUTION
            </h1>
            <p className="font2 opacity-40 pb-4">
              We are delighted to present our Marketing and Distribution
              services that are designed to help your projects reach the widest
              audience and achieve success.
            </p>
            <ul className="font2 flex flex-col gap-2">
              <li><h1>Market Research and Strategy</h1></li>
              <li className="opacity-40">
                Our first step is to conduct in-depth market research to
                understand your project's potential audience and the competitive
                landscape. Based on the findings, we develop a tailored
                marketing strategy to maximize your project's
                visibility and impact.
              </li>
              <li><h1>Public Relations (PR)</h1></li>
              <li className="opacity-40">
                Our PR experts work diligently to build positive media coverage
                for your productions. We engage with journalists, bloggers, and
                influencers to ensure your projects get the
                attention they deserve.
              </li>
              <li><h1>Distribution Strategies</h1></li>
              <li className="opacity-40">
                We develop customized distribution plans to ensure your
                productions are accessible to the right distribution channels,
                whether it's theatrical releases, streaming platforms,
                DVD/Blu-ray, or international markets.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
