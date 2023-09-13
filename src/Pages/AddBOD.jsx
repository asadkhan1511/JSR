import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CloudinaryUploadWidget from "../Components/CloudinaryUploadWidget";

const AddBOD = () => {
    const {id}=useParams();
    const [a,setA]=useState({
        name:"",
        desig:"",
        content:"",
        img:"",
    });

    async function get()
    {
        try{

            const {data}=await axios.get(`https://jsr-backend-x7rr.onrender.com/Bod/${id}`)
            setA(data);
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
  const [showWarning, setShowWarning] = useState(false);

  const handleUploadedImage = (imageUrl) => {
    setA({ ...a, img: imageUrl })
  };

  const addService = async() => {
    // console.log(a);
    const apiURL = `https://jsr-backend-x7rr.onrender.com/Bod/${id}`;
    axios
      .put(apiURL, a)
      .then(() => {
      navigate('/member');
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center p-10 bg-indigo-400      " style={{fontFamily:"sans-serif"}}>
        <div className="w-[80vw] p-6 shadow-lg bg-white rounded-md">
          <h1 className="text-3xl block text-center ">
          Update Member
          </h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="Title" className="block text-base mb-2 font-bold ">
              Name:
            </label>
            <input
              type="text"
              id="Title"
              value={a?.name}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
            //   placeholder="Enter Title"
              onChange={(e) => setA({ ...a, name: e.target.value })}
            />
          </div>

            <label htmlFor="Producer" className="block text-base mb-2 font-bold">
              Designation
            </label>
            <input
              type="text"
              id="producer"
              value={a?.desig}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
            //   placeholder=""
              onChange={(e) => setA({ ...a, desig: e.target.value })}
            />
        

        <div className="mt-3">
            <label htmlFor="Title1" className="block text-base mb-2 font-bold">
              Content
            </label>
            <input
              type="text"
              id="Title1"
              value={a?.content}
              className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-400"
            //   placeholder="Enter Title"
              onChange={(e) => setA({ ...a, content: e.target.value })}
            />
          </div>

          <div className="mt-3 flex flex-col-2 justify-around ">
            <div>
              <label htmlFor="Img" className="block text-base mb-2 text font-bold">
                UPLOAD IMAGE
              </label>

              <div className="flex flex-col items-center justify-center">
                <CloudinaryUploadWidget onImageUpload={handleUploadedImage} />
              </div>
            </div>
            <div className="w-20 h-20" >
              <img src={a?.img}   className="w-20 h-20" alt="" />
            </div>
          </div>

          {/* {showWarning && (
            <span className="text-red-600">* All fields are necessary</span>
          )} */}

          <div className="mt-2">
              <button
                className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                onClick={() => {
                    
                        // if(a.name != ""  && a.content != "" && a.img != "" )
                       {addService();
                                           
                    }
          
                    // else 
                    // setShowWarning(true);
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

export default AddBOD