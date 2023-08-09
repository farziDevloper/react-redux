import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';

const SelectBox = () => {
    const [gen , setGen] = useState("")
    const [second ,setSecond] = useState("")
    const Gender = [
        {label:"Male" , value: 1},
        {label:"feMale" , value: 2},{label:"uni" , value: 3},
    
    ]
    const Male = [{
      label: "Small", value: "small"
  },
  {
    label: "Medium",
  value: "medium"
  },
  {
  label: "Large",
  value: "large" }
    ]
    const Female = [
      {
          label: "Indian & Fushion Wear ",
          value: "Indian & Fushion Wear "
      },
      {
        label: "Western wear" ,
      value: "Western wear"
      },
      {
        label: "Belts ,Scarfs and More",
        value: "Belts ,Scarfs and More" 
      },
      {
        label: "Sunglasses & Frames",
        value: "Sunglasses & Frames" 
      },
      {
        label: "Footwear",
        value: "Footwear" 
      },
      {
        label: "Sports & Active wear",
        value: "Sports & Active wear" 
      },
      {
        label: "Watches & Wearbales",
        value: "Watches & Wearbales" 
      },
      {
        label: "Sleep Wear & Lounge Wear",
        value: "Sleep Wear & Lounge Wear" 
      },
      {
        label: "Hand bags & Wallets",
        value: "Hand bags & Wallets" 
      },
      {
        label: "bagpacks",
        value: "bagpacks" 
      },
        ]
    const Category = [   {
      label: "Select Sleeve",
      value: "Select Sleeves"
  },
  {
    label: "Full Sleeve",
      value: "fullsleeve"
  },
  {
    label: "Half Sleeve",
      value: "halfsleeve"
  },
  {
    label: "Sleeveless",
      value: "sleeveless"
  },
  {
    label: "Raglan",
      value: "raglan"
  },
  ]
    
    const handleChange = (e)=> {
        console.log("value", e?.target?.value);
        setGen(e?.target?.value)
        setSecond(e?.target?.value)
    }

    const handleSecondChange = (e) => {
      console.log("handleSecondChange" , e);
    }
    console.log("gen",gen , "second" ,second);


  return (
    <div style={{width:'250px'}}>
            <TextField
          required
          id=""
          select
          label="Gender"
          defaultValue={''}
          name="Gender"
          helperText="Please select your Gender"
          className="m-3 w-52"
          onChange={(e) => {
            handleChange(e, "Gender");
          }}
        >
              {Gender.map((option ,id) => (
            <MenuItem key={id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          required
          id=""
          select
          label="Gender"
          defaultValue={''}
          name="Gender"
          helperText="Please select your Gender"
          className="m-3 w-52"
          onChange={(e) => {
            handleChange(e, "Gender");
          }}
        >
              {(gen === 1 ? Male : Female).map((option ,id) => (
            <MenuItem key={id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id=""
          select
          label="Gender"
          defaultValue={''}
          name="Gender"
          helperText="Please select your Gender"
          className="m-3 w-52"
          onChange={(e) => {
            handleChange(e, "Gender");
          }}
        >
              {Category.map((option ,id) => (
            <MenuItem key={id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </div>
  )
}

export default SelectBox;









// const Male = [
//   {
//       label: "Small",
//       value: "small"
//   },
//   {
//     label: "Medium",
//   value: "medium"
//   },
//   {
//   label: "Large",
//   value: "large" }
//     ]
//     const Female = [
//       {
//           label: "Small girl",
//           value: "small girl"
//       },
//       {
//         label: "Medium girl" ,
//       value: "medium girl"
//       },
//       {
//         label: "Large girl",
//         value: "large girl" }
//         ] 