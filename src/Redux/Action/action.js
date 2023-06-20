import { FETCH_DATA, FETCH_FAIL, FETCH_SUCCESS } from "../actionTypes";



export const fetchAllData = (id) => {
    return (dispatch)  => {
        dispatch({type : FETCH_DATA})
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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

// export const fetchAllData = () => {
//   return (dispatch) => {
//     dispatch({ type: 'FETCH_DATA_REQUEST' });
//     fetch('https://dad-jokes.p.rapidapi.com/random/joke') // Replace with your API endpoint
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
//       })
//       .catch((error) => {
//         dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
//       });
//   };
// };