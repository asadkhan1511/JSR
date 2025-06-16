import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CloudinaryUploadWidget from "../Components/CloudinaryUploadWidget";
import { BACKEND_URL } from "../../config";

const AddCard = () => {
  const { key } = useParams();
  const [a, setA] = useState({
    title: "",
    producer: "",
    director: "",
    dop: "",
    singer: "",
    musicproducer: "",

    img: "",
    link: "",
  });
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);

  const handleUploadedImage = (imageUrl) => {
    setA({ ...a, img: imageUrl });
  };

  const addCard = async () => {
    console.log(a);
    const apiURL =
      key == "release"
        ? `${BACKEND_URL}/RProject/`
        : `${BACKEND_URL}/Upcoming/`;
    axios
      .post(apiURL, a)
      .then(() => {
        navigate("/");
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-400">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center font-semibold">
            Add Project
          </h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="Title" className="block text-base mb-2">
              Title
            </label>
            <input
              type="text"
              id="Title"
              value={a?.title}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter Title"
              onChange={(e) => setA({ ...a, title: e.target.value })}
            />
          </div>

          {true ? (
            <div className="mt-3">
              <label htmlFor="Producer" className="block text-base mb-2">
                Producer
              </label>
              <input
                type="text"
                id="producer"
                value={a?.producer}
                className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
                placeholder="Enter #Tag1 htmlFor Superhero"
                onChange={(e) => setA({ ...a, producer: e.target.value })}
              />
            </div>
          ) : null}

          <div className="mt-3">
            <label htmlFor="#Director" className="block text-base mb-2">
              Director
            </label>
            <input
              type="text"
              id="#Director"
              value={a?.director}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter Director Name"
              onChange={(e) => setA({ ...a, director: e.target.value })}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="#DOP" className="block text-base mb-2">
              DOP
            </label>
            <input
              type="text"
              id="#DOP"
              value={a?.dop}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter DOP Name"
              onChange={(e) => setA({ ...a, dop: e.target.value })}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="#Singer" className="block text-base mb-2">
              Singer
            </label>
            <input
              type="text"
              id="#Singer"
              value={a?.singer}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter Singer Name"
              onChange={(e) => setA({ ...a, singer: e.target.value })}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="#Music Producer" className="block text-base mb-2">
              Music Producer
            </label>
            <input
              type="text"
              id="#MusicProducer"
              value={a?.musicproducer}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter Music Producer Name"
              onChange={(e) => setA({ ...a, musicproducer: e.target.value })}
            />
          </div>

          {true ? (
            <div className="mt-3">
              <label htmlFor="#link" className="block text-base mb-2">
                Link
              </label>
              <input
                type="text"
                id="#link"
                value={a?.link}
                className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
                placeholder="Enter YouTube Link"
                onChange={(e) => setA({ ...a, link: e.target.value })}
              />
            </div>
          ) : null}

          <div className="mt-3 flex flex-col-2 justify-around ">
            <div>
              <label
                htmlFor="Img"
                className="block text-base mb-2 text font-bold"
              >
                UPLOAD IMAGE
              </label>

              <div className="flex flex-col items-center justify-center">
                <CloudinaryUploadWidget onImageUpload={handleUploadedImage} />
              </div>
            </div>
            <div className="w-20 h-20">
              <img src={a?.img} className="w-20 h-20" alt="" />
            </div>
          </div>

          {/* {showWarning && (
            <span className="text-red-600">* All fields are necessary</span>
          )} */}

          <div className="mt-2">
            <button
              className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
              onClick={() => {
                if (key == "release") {
                  // if(a.title != "" && a.director && a.dop != "" && a.img != "" && a.link != "" && a.producer != "")
                  {
                    addCard();
                  }
                } else if (key == "upcoming") {
                  // if(a.title != "" && a.director && a.dop != "" && a.img != "" )
                  {
                    addCard();
                  }
                } else setShowWarning(true);
              }}
            >
              CREATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCard;
