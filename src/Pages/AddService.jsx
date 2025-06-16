import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CloudinaryUploadWidget from "../Components/CloudinaryUploadWidget";
import { BACKEND_URL } from "../../config";

const AddService = () => {
  const { id } = useParams();
  const [a, setA] = useState({
    mainHeading: "",
    subHeading1: "",
    subHeading2: "",
    subHeading3: "",
    desc: "",
    desc1: "",
    desc2: "",
    desc3: "",
    img: "",
  });

  async function get() {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/Service/${id}`);
      setA(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    get();
  }, []);

  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);

  const handleUploadedImage = (imageUrl) => {
    setA({ ...a, img: imageUrl });
  };

  const addService = async () => {
    // console.log(a);
    const apiURL = `${BACKEND_URL}/Service/${id}`;
    axios
      .put(apiURL, a)
      .then(() => {
        navigate("/services");
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div
        className="flex justify-center items-center p-10 bg-indigo-400      "
        style={{ fontFamily: "sans-serif" }}
      >
        <div className="w-[80vw] p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center ">Update Services</h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="Title" className="block text-base mb-2 font-bold ">
              Main Heading
            </label>
            <input
              type="text"
              id="Title"
              value={a?.mainHeading}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              //   placeholder="Enter Title"
              onChange={(e) => setA({ ...a, mainHeading: e.target.value })}
            />
          </div>

          <label htmlFor="Producer" className="block text-base mb-2 font-bold">
            Description
          </label>
          <input
            type="text"
            id="producer"
            value={a?.desc}
            className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
            //   placeholder=""
            onChange={(e) => setA({ ...a, desc: e.target.value })}
          />

          <div className="mt-3">
            <label htmlFor="Title1" className="block text-base mb-2 font-bold">
              Sub Heading 1
            </label>
            <input
              type="text"
              id="Title1"
              value={a?.subHeading1}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              //   placeholder="Enter Title"
              onChange={(e) => setA({ ...a, subHeading1: e.target.value })}
            />
          </div>

          <label htmlFor="Producer1" className="block text-base mb-2 font-bold">
            Description 1
          </label>
          <input
            type="text"
            id="producer1"
            value={a?.desc1}
            className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
            //   placeholder="Enter #Tag1 htmlFor Superhero"
            onChange={(e) => setA({ ...a, desc1: e.target.value })}
          />

          <div className="mt-3">
            <label htmlFor="Title2" className="block text-base mb-2 font-bold">
              Sub Heading 2
            </label>
            <input
              type="text"
              id="Title2"
              value={a?.subHeading2}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              //   placeholder="Enter Title"
              onChange={(e) => setA({ ...a, subHeading2: e.target.value })}
            />
          </div>

          <label htmlFor="Producer2" className="block text-base mb-2 font-bold">
            Description 2
          </label>
          <input
            type="text"
            id="producer2"
            value={a?.desc2}
            className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
            //   placeholder="Enter #Tag1 htmlFor Superhero"
            onChange={(e) => setA({ ...a, desc2: e.target.value })}
          />

          <div className="mt-3">
            <label htmlFor="Title3" className="block text-base mb-2 font-bold">
              Sub Heading 3
            </label>
            <input
              type="text3"
              id="Title3"
              value={a?.subHeading3}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
              //   placeholder="Enter Title"
              onChange={(e) => setA({ ...a, subHeading3: e.target.value })}
            />
          </div>

          <label htmlFor="Producer3" className="block text-base mb-2 font-bold">
            Description 3
          </label>
          <input
            type="text"
            id="producer3"
            value={a?.desc3}
            className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
            //   placeholder="Enter #Tag1 htmlFor Superhero"
            onChange={(e) => setA({ ...a, desc3: e.target.value })}
          />

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

          {showWarning && (
            <span className="text-red-600">* All fields are necessary</span>
          )}

          <div className="mt-2">
            <button
              className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
              onClick={() => {
                if (
                  a.mainHeading != "" &&
                  a.subHeading1 &&
                  a.subHeading2 != "" &&
                  a.subHeading3 != "" &&
                  a.desc != "" &&
                  a.desc1 != "" &&
                  a.desc2 != "" &&
                  a.desc3 != ""
                ) {
                  addService();
                } else setShowWarning(true);
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddService;
