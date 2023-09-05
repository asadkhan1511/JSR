import React, { useEffect, useState } from "react";
import "../Gallery/Gallery.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = (props) => {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://jsr-backend-x7rr.onrender.com/Gallery"
      );
      const data = await response.json();
      console.log(data, " gallery =>>>");
      setGallery(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-center pt-20 -mt-5 lg:pt-28 text-4xl lg:text-6xl tracking-[2px]  lg:tracking-[6px] pb-10 lg:pb-20">
        GALLERY
      </h1>
      <div className="bg-black -mt-7">
        <PhotoProvider>
          <div className="gallery__div_container">
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView src={gallery?.img1}>
                  <img src={gallery?.img1} alt="img1"></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView src={gallery?.img2}>
                  <img src={gallery?.img2} alt="img2"></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView src={gallery?.img3}>
                  <img src={gallery?.img3} alt="img3"></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView src={gallery?.img4}>
                  <img src={gallery?.img4} alt="img4"></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView src={gallery?.img5}>
                  <img src={gallery?.img5} alt="img5"></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView src={gallery?.img6}>
                  <img src={gallery?.img6} alt="img6"></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView src={gallery?.img7}>
                  <img src={gallery?.img7} alt="img7"></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView src={gallery?.img8}>
                  <img src={gallery?.img8} alt="img8"></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView src={gallery?.img9}>
                  <img src={gallery?.img9} alt="img9"></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView src={gallery?.img10}>
                  <img src={gallery?.img10} alt="img10"></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView src={gallery?.img11}>
                  <img src={gallery?.img11} alt="img11"></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView src={gallery?.img12}>
                  <img src={gallery?.img12} alt="img12"></img>
                </PhotoView>
              </div>
            </div>
            <div className="gallery__col">
              <div className="gallery__row1">
                <PhotoView src={gallery?.img13}>
                  <img src={gallery?.img13} alt="img13"></img>
                </PhotoView>
              </div>
              <div className="gallery__row2">
                <PhotoView src={gallery?.img14}>
                  <img src={gallery?.img14} alt="img14"></img>
                </PhotoView>
              </div>
            </div>
          </div>
        </PhotoProvider>
      </div>
    </>
  );
};

export default Gallery;
