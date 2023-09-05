import { useEffect, useState } from "react";
import GalleryUploadButton from "./GalleryUploadButton";
import axios from "axios";

const GalleryAdmin = () => {
  const [gallery, setGallery] = useState(null);

  const updateImg = (key, imageUrl) => {
    const apiURL = `https://jsr-backend-x7rr.onrender.com/Gallery/${key}`;

    const postData = { [key]: imageUrl };

    axios
      .put(apiURL, postData)
      .then(() => {
        console.log("Image URL updated successfully");
      })
      .catch((error) => {
        console.log("Error updating image URL", error);
      });
  };

  useEffect(() => {
    const fetchGallery = async () => {
      const response = await fetch(
        "https://jsr-backend-x7rr.onrender.com/Gallery"
      );
      const data = await response.json();
      setGallery(data);
    };

    fetchGallery();
  }, []);

  return (
    <>
      <hr className="w-auto mx-auto mt-10 h-1 bg-black"/>
      <span className="flex text-8xl justify-center mt-20 font1">UPDATE GALLERY</span>
      <div
        className="grid grid-cols-1 
        lg:grid-cols-4 lg:gap-3 
        justify-items-center 
        mt-20 scroll-smooth"
      >
        {gallery &&
          Object.keys(gallery)
            .slice(1)
            .map((key) => (
              <GalleryUploadButton
                key={key}
                oldURL={gallery[key]}
                onImageUpload={(imageUrl) => updateImg(key, imageUrl)}
              />
            ))}
      </div>
    </>
  );
};

export default GalleryAdmin;
