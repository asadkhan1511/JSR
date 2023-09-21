import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {TbEdit} from "react-icons/tb";
import { Link } from "react-router-dom";

Aos.init({
  duration: 1200,
});

const Rental = () => {
  const [rentals, setRentals] = useState([]);
  const [ri, setRi] = useState({
    heading: "",
    content: "",
  });
  const [refresh, setRefresh] = useState(false);
  async function get() {
    try {
      const { data } = await axios.get(
        "https://jsr-backend-x7rr.onrender.com/Rentals"
      );
      // console.log("data[0]",data[0]);
      setRentals(data);
    } catch (e) {
      console.log(e);
    }
  }

  const handleDelete = async (id) => {
    const Deleteurl = `https://jsr-backend-x7rr.onrender.com/Rentals/${id}`;
    await axios
      .delete(Deleteurl)
      .then(() => {
        // console.log(response.data);
        setRefresh((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addRi = async () => {
    // console.log(a);
    const apiURL = `https://jsr-backend-x7rr.onrender.com/Rentals`;
    axios
      .post(apiURL, ri)
      .then(() => {
        setRefresh((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    get();
  }, [refresh]);
  return (
    <>
      <div className="bg-black p-5 md:p-12 px-6 h-full w-[100%] text-white ">
        {/* <h1 className="text-2xl lg:text-6xl text-start bg-black text-white pt-5 lg:pt-2 pb-8 lg:pb-20">
          Professional Cameras
        </h1> */}
        {rentals.map((item, index) => {
          return (
            <>
              <h3
                key={index}
                className="text-xl lg:text-4xl text-start bg-black text-white pt-5 lg:pt-2 pb-6 lg:pb-6"
              >
                {item?.heading}
                <RiDeleteBin6Fill
                  className="text-red-500 w-10 h-10  ml-9 scale-100 hover:scale-125 cursor-pointer"
                  onClick={() => {
                    handleDelete(item?._id);
                  }}
                />
                <Link to={`/editRentals/${item?._id}`}>
                  <TbEdit className="text-blue-500 w-10 h-10  mr-9 scale-100 hover:scale-125" />
                </Link>
              </h3>
              <p className="font2 opacity-40 pb-10">{item?.content}</p>
            </>
          );
        })}

        <>
          <div
            className=" text-black flex justify-center items-center p-10 bg-indigo-400      "
            style={{ fontFamily: "sans-serif" }}
          >
            <div className="w-[80vw] p-6 shadow-lg bg-white rounded-md">
              <h1 className="text-3xl block text-center ">Add Rental Item</h1>
              <hr className="mt-3" />
              <div className="mt-3">
                <label
                  htmlFor="Title"
                  className="block text-base mb-2 font-bold "
                >
                  Heading
                </label>
                <input
                  type="text"
                  id="Title"
                  className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
                  //   placeholder="Enter Title"
                  onChange={(e) => setRi({ ...ri, heading: e.target.value })}
                />
              </div>

              <label
                htmlFor="Producer"
                className="block text-base mb-2 font-bold"
              >
                Content
              </label>
              <input
                type="text"
                id="producer"
                className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
                //   placeholder=""
                onChange={(e) => setRi({ ...ri, content: e.target.value })}
              />

              <div className="mt-2">
                <button
                  className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                  onClick={() => {
                    addRi();
                  }}
                >
                  Add Rental Item
                </button>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Rental;
