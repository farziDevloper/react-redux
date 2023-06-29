import { useState } from 'react';
import './App.css';

function Abhishek() {
  const [inputFields, setInputFields] = useState([
    { colour: '', size: '', quantity : '', secondaryColour :'' ,price: '' }
  ])

const handleFormChange = (index, event) => {
       let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
}


const addFields = () => {
  let newfield = {colour: '', size: '', quantity : '', secondaryColour :'' ,price: '' }

  setInputFields([...inputFields, newfield])
}
const submit = (e) => {
  e.preventDefault();
  console.log(inputFields)
}
  return (
    <div className="App">
  <button onClick={addFields}>Add More..</button>

      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
            <input
              name='name'
              placeholder='Name'
              value={input.name}
              onChange={event => handleFormChange(index, event)}
            />
            <input
              name='age'
              placeholder='Age'
              value={input.age}
              onChange={event => handleFormChange(index, event)}
            />
          </div>
          )
        })}
<button onClick={submit}>Submit</button>
      </form>
   
    </div>
  );
}

export default Abhishek;