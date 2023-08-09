import React, { useEffect, useState } from "react";
import MultiImageInput from "react-multiple-image-input";

function ImageBox() {
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100"
  };

  const [images, setImages] = useState({});

  useEffect(() => {

  },[])

  console.log(images);

  return (
    <MultiImageInput
      max={40}
      width={350}
      height={350}
      opacity={false}
      theme="light"
      images={images}
      setImages={setImages}
      allowCrop={false}
      cropConfig={{ crop, ruleOfThirds: true }}
    />
  );
}

export default ImageBox;
