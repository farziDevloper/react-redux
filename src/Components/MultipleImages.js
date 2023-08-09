import React, { useState, useEffect } from "react";

const PreviewMultipleImages = () => {
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLs] = useState([]);
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls= [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
      {imageURLS.map((imageSrc) => (
        <img src={imageSrc} alt="not fount" width={"250px"} />
      ))}
    </>
  );
};

export default PreviewMultipleImages;



// import { useState } from "react";
// import ImagesGallery from "./ImagesGallery";
// function PreviewMultipleImages(){
//    const [images, setImages] = useState([]);
//    const handleMultipleImages =(evnt)=>{
//       const selectedFIles =[];
//       const targetFiles =evnt.target.files;
//       const targetFilesObject= [...targetFiles]
//       targetFilesObject.map((file)=>{
//          return selectedFIles.push(URL.createObjectURL(file))
//       })
//       setImages(selectedFIles);
//     }
//     console.log("images >>>>.", images);
// return(
//     <>
//     <div className="form-group my-3 mx-3">
//     <input type="file" onChange={handleMultipleImages} multiple/>
//     </div>
//       <ImagesGallery images={images} />
//    </>
// )
// }
// export default PreviewMultipleImages

