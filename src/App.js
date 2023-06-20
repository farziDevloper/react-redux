import React from "react";
import { fetchAllData } from "./Redux/Action/action";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostData } from "./Redux/Action/postAction";


function App() {
  let x = Math.floor((Math.random() * 10) + 1);
  let details =	{"name":"test","salary":"123","age":"23"}
  const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(fetchAllData(x))
    } ,[])

    const getApi = useSelector((state) => state.data);
    const postApi = useSelector((state) => state.post);
    console.log("postApi " ,postApi);

      console.log("getApi" ,getApi);
  return (
    <div className="App">
  <h1>hello</h1>
  <button onClick={() => dispatch(fetchPostData(details))}>post</button>
    </div>
  );
}

export default App;
