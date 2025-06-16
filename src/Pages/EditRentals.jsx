import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "../../config";

const EditRentals = () => {
  const { id } = useParams();
  const [a, setA] = useState({
    heading: "",
    content: "",
  });
  const navigate = useNavigate();
  const getData = async () => {
    var { data } = await axios.get(`${BACKEND_URL}/Rentals/${id}`);
    setA(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const updateRental = async () => {
    // console.log(a);
    const apiURL = `${BACKEND_URL}/Rentals/${id}`;
    axios
      .put(apiURL, a)
      .then(() => {
        navigate("/rentals");
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
            Edit Rentals
          </h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="Heading" className="block text-base mb-2">
              Heading
            </label>
            <input
              type="text"
              id="Heading"
              value={a?.heading}
              className="border font2 w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              placeholder="Enter Title"
              onChange={(e) => setA({ ...a, heading: e.target.value })}
            />
          </div>

          {true ? (
            <div className="mt-3">
              <label htmlFor="Content" className="block text-base mb-2">
                Content
              </label>
              <input
                type="text"
                id="Content"
                value={a?.content}
                className="border font2 w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
                placeholder="Enter #Tag1 htmlFor Superhero"
                onChange={(e) => setA({ ...a, content: e.target.value })}
              />
            </div>
          ) : null}

          <div className="mt-2">
            <button
              className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
              onClick={() => {
                updateRental();
              }}
            >
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditRentals;
