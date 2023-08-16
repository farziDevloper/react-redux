import React from 'react'

const FirebaseComponent = () => {
    const [data , setData] = React.useState("");
    const [search,setSearch] = React.useState("")
    const [responseData , setResponseData] = React.useState()


    // React.useEffect(() => {},[responseData])
    const postData  = async (e) => {
        e.preventDefault();
            if(data){
                const response  = await fetch('https://fir-project-8bd4f-default-rtdb.firebaseio.com/myDataBase.json', 
                {method: 'POST',
                headers : {
                 "Content-Type": "application/json"
                },
               body    : JSON.stringify({name: data})
            }
            )
            console.log("response data", response);
            }
            else {
                alert('Please enter the name');
            }
    }


    const searchUser  = async (e) => {
        e.preventDefault()
        if(search){
            const res  = await fetch(`https://fir-project-8bd4f-default-rtdb.firebaseio.com/myDataBase.json`, 
            {method: 'GET',
            headers : {
             "Content-Type": "application/json"
            },
           
        },
        )
        const movies = await res.json();
        const filteredData = Object.values(movies).filter(item => item.data.includes(search));
        
        setResponseData(filteredData);
      }
    }
    console.log("response data", responseData);

 
    
    
  return (
    <>
    <h1>Firebase Component in REACT JS</h1>
  <form  onSubmit={postData} >
  <input 
    type='text'
    placeholder='Name'
    value={data}
    onChange={(event)=>setData(event.target.value)}
    />

    <button type='submit'>
        Submit Data
    </button>
    <br />
    <br />

    <br />

    <br />

    <br />

    <br />

    <br />

  </form>

<input 
    tpye="text"
    placeholder='search'
    value={search}
    onChange={(event)=>setSearch(event.target.value)}
/>
<button onClick={(e) => searchUser(e)} >
search
</button>
    </>
  )
}

export default FirebaseComponent