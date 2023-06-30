import React, { useEffect } from 'react'
import MaterialInput from '../UI/MaterialInput';
import { useState } from 'react';
// import { inputBoxData } from './data'

const inputBoxData = [
    {
      id: "1",
      placeholder: "hello",
      type: "text",
      order: 0,
      options: [],
      classes: "hi",
      name: "inputBox"
    },
    {
      id: "2",
      placeholder: "wdf",
      type: "select",
      order: 0,
      name: "selectBox",
      options: [
        {label: "abhi", value: "abhi" },
        { label: "singh", value: "singh" },
        {label: "here", value: "here" },
      ],
      classes: "sdfg",
    },
  ];

const formField = {
  inputBox : "",
  selectBox:''
}

const MapInputBox = () => {
  const [formData , setFormData] = useState({...formField})

  const handleFormDataChange = (event) => {
    const re = /^[0-9\b]+$/;

      if (event.target.value === "" || re.test(event.target.value)) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
  
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }


  };
  console.log("formdata >>> > > >> > >  > >" , formData);
  useEffect(() => {

  } ,[])
  const handleStateChange = (selectedState) => {
    setFormData({
      ...formData,
      ["selectBox"]: selectedState.value,
    });
    if(selectedState?.target?.type == "text"){
      let value = selectedState.target.value;
      setFormData({
        ...formData,
        [selectedState.target.name]: value,
      })

    }

    // console.log( "dfghjkljhgfbnmklfvbnmhg", selectedState.target.type);
    // console.log( "dfghjkljhgfbnmklfvbnmhg", selectedState);


  };


  return (
    <div> 
      hello
      <div style={{width:'25%', justifyContent:'center', alignItems:'center'}}>
      {inputBoxData.map((data , index) =>{ 
        return (
           <div key={index} > <MaterialInput type={data.type} placeholder={data.placeholder} name={data.name}  options={data.options} value={formData.value} onChange={handleStateChange} /> </div>
        )
        })}
        <input type='options' />
      </div>
    </div>
  )
}

export default MapInputBox