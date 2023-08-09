import React, { useEffect } from 'react'
import MaterialInput from '../UI/MaterialInput';
import { useState } from 'react';
import { TransitionsModal } from './ModalBox';
// import { inputBoxData } from './e'


const inputBoxData = [
  {
    id: "1",
    placeholder: "placeholder",
    type: "text",
    order: 0,
    options: [],
    classes: "hi",
    name: "inputBox",
    value: ""
  },
  {
    id: "2",
    placeholder: "placeholder",
    type: "select",
    order: 0,
    name: "selectBox",
    value: "",
    options: [
      {label: "abhi", value: "abhi" },
      { label: "singh", value: "singh" },
      {label: "None", value: "none" },
    ],
    classes: "sdfg",
  },
  {
    id: "3",
    placeholder: "placeholder",
    type: "text",
    order: 0,
    options: [],
    classes: "hi",
    name: "inpox",
    value: ""
  },
  {
    id: "4",
    placeholder: "hello world",
    type: "select",
    order: 0,
    name: "secondBox",
    value: "",
    options: [
      {label: "one", value: "one" },
      { label: "two", value: "two" },
      {label: "None", value: "none" },
    ],
    classes: "sdfg",
  },
  
];








const MapInputBox = () => {
  const [data, setData] = useState([...inputBoxData]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalValue, setModalValue] = useState("");


  const [open, setOpen] = React.useState(false);

  useEffect(() => {

  },[modalValue])

  const handleModalInputChange = (e) => {
    let value = e?.target?.value;
    console.log("value >>>> > > > > ",value);
    setModalValue(value);
    onChangeHandler(value)
  };

  const handleStateChange = (type, e, index, name, id) => {
    const value = type === 'text' ? e.target.value : e.value;
  
    const updatedData = data.map((item) => {
      if (item.id === id) {
        if (type === 'select') {
          if (value === 'none') {
            setOpen(true);
            setSelectedIndex(index); // Store the index of the input box that triggered the modal
          }
        }
        return { ...item, value: value };
      }
      return item;
    });
  
    setData(updatedData);
  };

// const handleStateChange = (type, e, index, name, id) => {
//   const value = type === 'text' ? e.target.value : e.value;

//   if (type === 'select' && value === 'none') {
//     setSelectedInputId(id); // Set the selected input ID
//     setOpen(true); // Open the modal
//   } else {
//     const updatedData = data.map((item) => {
//       if (item.id === id) {
//         return { ...item, value: value };
//       }
//       return item;
//     });

//     setData(updatedData);
//   }
// };

const onChangeHandler = (e) => {
  const updatedData = data.map((item, index) => {
    console.log(selectedIndex ,"handleModalInputChange" , index , modalValue);
    if (index === selectedIndex) {
      return { ...item, value: e};
    }
    return item;
  });

  setData(updatedData);
};


  

  console.log("data " , data);

  return (
    <div>
      <div style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
        {data.map((e, index) => {
          console.log("e value > > > > > >", e.value);
          return (
            <div key={index}>
              <MaterialInput
                id={e.id}
                type={e.type}
                placeholder={e.placeholder}
                name={e.id}
                options={e.options}
                value={e.value}
                onChange={(abhi) => {
                handleStateChange(e.type, abhi, index, e.name, e.id);
                }}
              />
            </div>
          );
        })}
      </div>
    {<TransitionsModal 
    setOpen={setOpen}
     open={open} 
     selectedIndex={selectedIndex}
      modalValue={modalValue}
      // onChangeHandler={onChangeHandler}
      setSelectedIndex={setSelectedIndex}
      handleModalInputChange={handleModalInputChange}
      setModalValue={setModalValue}
      />

    }

    </div>
  );
};

export default MapInputBox;
