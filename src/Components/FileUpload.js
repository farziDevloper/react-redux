


 //react sample code



import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const FileUpload = () => {
  const [uploadedUrls, setUploadedUrls] = useState([]);

  const handleFileUpload = async (files) => {
    const formData = new FormData();
    files.forEach((file) => console.log("files",files));

    console.log("upload urls here" , formData);
    try {
      const response = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setUploadedUrls(response.data.urls);
    } catch (error) {
      console.error('Error uploading files: ', error);
    }
  };

  return (
    <div>
      <Dropzone onDrop={handleFileUpload}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ border: '1px dashed black', padding: '20px' }}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>

      {uploadedUrls.length > 0 && (
        <div>
          <h2>Uploaded URLs:</h2>
          <ul>
            {uploadedUrls.map((url, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
