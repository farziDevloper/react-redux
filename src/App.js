import React from "react";
import { fetchAllData } from "./Redux/Action/action";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostData } from "./Redux/Action/postAction";

import Abhishek from "./Abhi";
import MapInputBox from "./Components/MapInputBox";
import ImageUpload from "./Components/MultipleImages";
import PreviewMultipleImages from "./Components/MultipleImages";
import ImageBox from "./Components/ImageBox";
import FilePreviewer from "./Components/FilePreview";
import SelectBox from "./Components/SelectBox";


function App() {
  const [showPopup , setShowPopUp] = React.useState(false)
  let x = Math.floor((Math.random() * 10) + 1);
  let details =	{"name":"test","salary":"123","age":"23"}
  const dispatch = useDispatch();
    React.useEffect(() => {
      // dispatch(fetchAllData(x))
      // dispatch(fetchPostData(details))

    } ,[])

    const getApi = useSelector((state) => state.data);
    // const postApi = useSelector((state) => state.post);
    // console.log("postApi " ,postApi);

      // console.log("getApi" ,getApi);
  return (
    <div className="App">

  {/* <button onClick={() => setShowPopUp(!showPopup) }>post</button> */}
      {/* <MapInputBox /> */}
      {/* <ImageUpload /> */}
      {/* <PreviewMultipleImages /> */}
    {/* <ImageBox /> */}
       {/* {showPopup &&  <Abhishek/>} */}
       {/* <FilePreviewer /> */}
       <SelectBox />
       
    </div>
  );
}

export default App;
