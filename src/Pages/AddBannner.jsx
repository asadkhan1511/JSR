import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Upload from '../../Public/Images/upload.jpg'
import axios from "axios";
import CloudinaryUploadWidget from "../Components/CloudinaryUploadWidget";

const AddBanner = () => {
    const {type}=useParams();
    const [imagesrc,setImagesrc]=useState(Upload);
    const [a,setA]=useState({});
    async function get()
    {
        try{
            const {data}=await axios.get(`https://jsr-backend-x7rr.onrender.com/Banner/${type}`)
            setA(data[0]);
        }
        catch(e)
        {
            console.log(e);
        }
    }
    useEffect(()=>{
 get();
    },[])

    const navigate=useNavigate();

  const handleUploadedImage = (imageUrl) => {
     
      setImagesrc(imageUrl);
    const updatedBannerImg = [...a.img];
    updatedBannerImg.push(imageUrl);
    setA({ ...a, img: updatedBannerImg });
  };

  const addService = async() => {
    // console.log(a);
    const apiURL = `https://jsr-backend-x7rr.onrender.com/Banner/${type}`;
    axios
      .post(apiURL, a)
      .then(() => {
      navigate(`/${type}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center p-10 bg-indigo-400 h-screen" style={{fontFamily:"sans-serif"}}>
        <div className=" w-[30vw] p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center ">
          Update Banner
          </h1>
          <hr className="mt-3" />
        
          <div className="mt-3 flex flex-col-2 justify-around ">
            <div>
              <label htmlFor="Img" className="block text-base mb-2 text font-bold ">
                UPLOAD IMAGE
              </label>

              <div className="flex flex-col items-center justify-center">
                <CloudinaryUploadWidget onImageUpload={handleUploadedImage}  />
              </div>
            </div>
            <div className="w-20 h-20" >
              <img  src={imagesrc}   className="w-20 h-20  object-fill " alt="" />
            </div>
          </div>

          <div className="mt-4">
              <button
                className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                onClick={() =>addService()}>
                Update
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBanner