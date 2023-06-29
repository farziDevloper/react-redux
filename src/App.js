import React from "react";
import { fetchAllData } from "./Redux/Action/action";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostData } from "./Redux/Action/postAction";

import Abhishek from "./Abhi";
import MapInputBox from "./Components/MapInputBox";


function App() {
  const [showPopup , setShowPopUp] = React.useState(false)
  let x = Math.floor((Math.random() * 10) + 1);
  let details =	{"name":"test","salary":"123","age":"23"}
  const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(fetchAllData(x))
      // dispatch(fetchPostData(details))

    } ,[])

    const getApi = useSelector((state) => state.data);
    // const postApi = useSelector((state) => state.post);
    // console.log("postApi " ,postApi);

      console.log("getApi" ,getApi);
  return (
    <div className="App">

  <button onClick={() => setShowPopUp(!showPopup) }>post</button>
      <MapInputBox />
       {/* {showPopup &&  <Abhishek/>} */}
       
    </div>
  );
}

export default App;
