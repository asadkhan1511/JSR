import React, { useEffect, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import axios from "axios";
import { Warning } from "postcss";

const WorkWithUs = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);

  const postMessage = async () => {
    try {
      const apiURL = "https://jsr-backend-x7rr.onrender.com/Query/";

      const postData = {
        message,
        name,
        whatsapp,
        email,
      };

      axios
        .post(apiURL, postData)
        .then((response) => {
          // console.log(response);
          if (response.status == 200) {
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 2500);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle any network or other errors that might occur during the POST request.
    }
  };

  const handleSubmit = () => {
    if (message == "" || name == "" || whatsapp == "" || email == "") {
      setWarning(true);
    } else {
      postMessage();
      setWarning(false);
    }
  };
  useEffect(() => {
    setSuccess(false);
    setWarning(false);
  }, []);

  return (
    <div className=" justify-center p-10 pb-10 lg:pb-20 flex gap-32 lg:flex-row  flex-wrap text-5xl lg:text-6xl pt-8 leading-14 lg:leading-16 tracking-[4px] lg:tracking-[6px]">
      <>
        <div className="flex flex-col justify-center items-center lg:items-end">
          <div className="w-[300px] lg:w-[450px] p-5 lg:pl-10 lg:p-2 text-center">
            FOR ANY QUERIES LEAVE US A MESSAGE!
          </div>
          {/* <div className="flex gap-8 w-60  pt-2 lg:pt-8">
            <a
              href="https://www.facebook.com/JSRProductionhouse"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                alt=""
                className="w-8 h-8 hover:scale-125 duration-200"
              />
            </a>
            <a
              href="https://www.instagram.com/jsrproductionhouse/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
                alt=""
                className="w-8 h-8 hover:scale-125  duration-200"
              />
            </a>
            <a href="https://www.youtube.com/@jsrproductionhouse9127" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt=""
                className="w-8 h-8 hover:scale-125  duration-200"
              />
            </a>
            <a href="">
              <BsTwitter className="w-8 h-8 text-blue-500 hover:scale-125  duration-200" />
            </a>
          </div> */}
        </div>
      </>
      <>
        <div className=" flex flex-col gap-4 items-center  lg:pl-16 justify-center  ">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Type your message"
            className=" font2 border-2 border-gray-900 p-4  text-sm h-32 lg:h-64 lg:w-[560px] md:[450px]  w-[300px]"
          />
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 ">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              className="font2 border-2 border-gray-900 p-4 text-sm h-16 w-[300px] text-gray-900 lg:w-[260px]"
            />
            <input
              onChange={(e) => setWhatsapp(e.target.value)}
              type="text"
              placeholder="Your whatsapp number"
              className="font2 border-2 border-gray-900 p-4 text-sm h-16 w-[300px]  lg:w-[260px]"
            />
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Your Email"
            className=" font2 border-2 p-4  border-gray-900 text-sm h-16 lg:h-16 lg:w-[560px] md:w-[450px] w-[300px]"
          />

          <a
            onClick={handleSubmit}
            href="#_"
            class="relative inline-block text-lg group"
          >
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium w-[300px] lg:w-[560px] leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900  group-hover:text-white">
              <span class="absolute inset-0  w-full h-full px-5 py-3  bg-gray-50"></span>
              <span class="absolute left-0 w-[600px] h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
              <span class="relative flex justify-center">Send</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900  group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>

          {warning && (
            <div className="text-red-700 text-sm font2 tracking-normal ">
              *All Fields Are Mandatory
            </div>
          )}
          {success && (
            <div className="text-green-700 text-sm font2 tracking-normal">
              *Form Submitted Successfully
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default WorkWithUs;
