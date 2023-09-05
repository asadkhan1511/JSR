import React from "react";

const About = () => {
  return (
    <div className="flex flex-col  justify-center pt-10 lg:pt-2  ">
      <div className="text-center flex flex-col items-center text-gray-600 leading-7">
        <h1 className="text-4xl tracking-wide lg:tracking-widest lg:text-7xl pb-4 pt-5 lg:pt-16 text-black">
          ABOUT JSR Productions
        </h1>

        {/* for large */}
        <div className="hidden lg:flex flex-col items-center ">
          <p className=" font2 mt-0 lg:mt-4 w-[320px] md:w-[550px] lg:w-[1200px] lg:text-[14px] tracking-wide text-gray-900    ">
            JSR Production House is a well-established production house in India
            located amidst the magnificent hills of Dehradun, Uttarakhand. With
            a vision to create an everlasting
          </p>
          <p className="lg:w-[1100px] xl:w-[1100px] font2 text-gray-900">
            impact through our full-service production house. Under the able
            guidance of Mr Tarun Singh Rawat, Vice Chairman- JSR Group, elder
            son of Mr. Jaswant Rawat. We have
          </p>
          <p className="lg:w-[1000px] xl:w-[1000px] font2 text-gray-900">
            thrived in a short period and have successfully emerged as one of
            the best production houses in India. JSR Production House is a
            revered and award
          </p>
          <p className="lg:w-[900px] xl:w-[900px] text-gray-900  font2">
            winning organization that provides a platform to showcase your
            potential and business.JSR Production house the importance of
            quality in
          </p>
          <p className="lg:w-[800px] xl:w-[800px] text-gray-900  font2">
            our work, so we ensure that all our projects are completed with
            perfection. We know the value of time and hence
          </p>
          <p className="lg:w-[700px]  xl:w-[700px] text-gray-900 font2">
            ensure that we complete the project within the given time frame. JSR
            Production House believe in
          </p>
          <p className="lg:w-[600px]  xl:w-[600px] text-gray-900 font2">
            delivering top-notch services at an affordable price.
          </p>
        </div>

        {/* for mobile */}
        <div className="lg:hidden font2  text-justify px-5 pb-5 text-gray-900">
          JSR Production House is a well-established production house in India located
          amidst the magnificent hills of Dehradun, Uttarakhand. With a vision to create
          an everlasting impact through our full-service production house. Under
          the able guidance of Mr. Tarun Singh Rawat, Vice Chairman- JSR Group,
          elder son of Mr. Jaswant Rawat. We have thrived in a short period and
          have successfully emerged as one of the best production houses in
          India. JSR Production House is a revered and award-winning
          organization that provides a platform to showcase your potential and
          business. We understand the importance of quality in our work, so we
          ensure that all our projects are completed with perfection. We know
          the value of time and hence ensure that we complete the project within
          the given time frame. We believe in delivering top-notch services at
          an affordable price.
        </div>
      </div>

      {/* <ul className="pt-2 font2 mt-0 lg:mt-4 w-[320px] md:w-[550px] lg:w-[800px] lg:text-[14px] flex flex-col justify-start tracking-wide leading-7 text-gray-600 ">
        <li className="pb-3">
          JSR Production House is a revered and award-winning organization that
          provides a platform to showcase your potential and business.
        </li>
        <li>
          We understand the importance of quality in our work, so we ensure that
          all our projects are completed with perfection.
        </li>
        <li>
          We know the value of time and hence ensure that we complete the
          project within the given time frame.
        </li>
        <li>
          We believe in delivering top-notch services at an affordable price
        </li>
      </ul> */}
    </div>
  );
};

export default About;
