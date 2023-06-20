export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";


export const fetchPostData = (data) => {
    return (dispatch)  => {
        dispatch({type : FETCH_DATA})
        fetch('https://dummy.restapiexample.com/api/v1/create', {
                method: "POST",
                body: JSON.stringify(data)
            })
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            dispatch({type : FETCH_SUCCESS ,payload : data})
          })
          .catch((error) => {
            dispatch({type: FETCH_FAIL ,payload :error})
          })
    }

}

