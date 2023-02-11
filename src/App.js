import { useState } from 'react';
import './App.css';
import Todolist  from './todolist.js';

function App() {

let [data, setData] = useState("")
let [arr, setArr] = useState([])

function takeInput(even){
  setData(even.target.value)
}

function removeElement(index){
  setArr(arr.filter((element, i) => i !== index));
}

let addToCart = ()=>{
  setArr((prev)=>([...prev,data]))
  setData("")
}

  return (
    <>
    <div className='main'>
    <div className='todo'>
      <h1>ToDo app</h1>
      <div className='inputDiv'>
        <input value={data}onChange={takeInput}/>
        <button onClick={addToCart}><i className="fa-solid fa-circle-plus" ></i></button>
      </div>
      <Todolist arr={arr} fun={removeElement}/>
    </div>
    </div>
    </>
  );
}

export default App;
