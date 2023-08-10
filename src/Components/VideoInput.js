import React from "react";
import axios from 'axios';
export default function VideoInput(props) {
  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  const handleSubmit  = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://liveeserver.azurewebsites.net/api/upload', {
            // Data to be sent to the server
                data: source
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div className="VideoInput">
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        multiple
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {!source && <button onClick={handleChoose}>Choose</button>}
      {source && (
        <video
          className="VideoInput_video"
          width="100%"
          height={height}
          controls
          src={source}
        />
      )}
      <div className="VideoInput_footer">{source || "Nothing selectd"}</div>
      <button onClick={(e) => {handleSubmit(e)}} > Submit</button>
    </div>
  );
}
