import React, { useState } from 'react';
import { Button, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';

const ImageUploader = () => {
    console.log("call 0");
    let arr = [];
    console.log("call 1");
  const [selectedImages, setSelectedImages] = useState([...arr]);
  console.log("call 2");

  const handleImageChange = (event) => {
    window.stop()
    console.log("call 3");
    const fileArray = Array.from(event.target.files);
    const selectedImageURLs = fileArray.map((file) => URL.createObjectURL(file));
    // arr.push(selectedImageURLs)
    setSelectedImages(selectedImageURLs);
};
arr.push(selectedImages)
console.log("selected images" , arr);


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      </Grid>
      {selectedImages.length > 0 && (
        <Grid item xs={12}>
          <Typography variant="subtitle1">Selected Images:</Typography>
          <ImageList cols={3} gap={8}>
            {arr.map((imageUrl, index) => (
              <ImageListItem key={index}>
                <img src={imageUrl} alt={`Image ${index}`} />
                <ImageListItemBar title={`Image ${index + 1}`} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      )}
    </Grid>
  );
};

export default ImageUploader;
