import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const GalleryUploadButton = ({ oldURL, onImageUpload }) => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [galleryButtonRef, setGalleryButtonRef] = useState(null);

  useEffect(() => {
    const cloudName = "dv0k2fm7b"; // replace with your own cloud name
    const uploadPreset = "jsrproductionhouse";

    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setUploadedImageUrl(result.info.secure_url);
          onImageUpload(result.info.secure_url);
          document
            .getElementById("uploadedimage")
            .setAttribute("src", result.info.secure_url);
        }
      }
    );

    if (galleryButtonRef) {
      galleryButtonRef.addEventListener("click", () => {
        myWidget.open();
      });
    }
  }, [galleryButtonRef, onImageUpload]);

  return (
    <button
      ref={(ref) => setGalleryButtonRef(ref)}
    >
      <img
        id="uploadedimage"
        className="w-64 h-64 hover:scale-110 mb-5 "
        src={uploadedImageUrl || oldURL}
        alt="Gallery Image"
        style={{ cursor: "pointer" }}
      />
    </button>
  );
};

GalleryUploadButton.propTypes = {
  oldURL: PropTypes.string.isRequired,
  onImageUpload: PropTypes.func.isRequired,
};

export default GalleryUploadButton;
