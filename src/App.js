 import React, { useState, useRef}  from 'react';
import './App.css';
import Buttonclk from './component/Buttonclk';
import Inputtake from './component/Inputtake';
import Listitem from './component/Listitem';
import {fetchlist} from './backend/backendreact.js'; 


function App() {
    const [inputtake,inputtakes] = useState(""); 
    const [list,listitem] = useState([]);
     const textInput = useRef();

  var handlechange = (e) => {inputtakes(e.target.value);
    console.log(e.target.value)}
  var handleclick = () => {
    console.log(inputtake);
    console.log(list);
    textInput.current.focus();
    // var array2 = list;
    listitem(list.concat(inputtake));
  console.log(list);
  inputtakes("");
  
    // listitem(array2);
    // console.log(list);
      // var wait = await addtodo(array2);
      // console.log(wait);
      // if(wait == "done"){
      //   inputtakes(wait);
      // }
     } 
  const keyPressed = ({ key }) => {
    // Capture search on Enter key
    if (key === "Enter") {
      handleclick()
    }
  } 
  var fetchedresult = async () => {
    console.log("called");
    var data1 = await fetchlist();    
    console.log(data1);
    // var array1 = data1;
    // console.log(array1);
    // var count = array1.length;
    // cons ole.log(count);
    // var count1 = list.length;
    // console.log(count1);
    // if (count1 != count) {
    //   listitem(array1);
    // }
   

};
fetchedresult();


  return (
    <div className="App">
    <h3 id="intro">Keep Track On Your Daily Routine</h3>
    <Inputtake className="form-control"  type="text" autoFocus id="firstinput" placeholder="Add YOur daily routine here" onChange={handlechange} ref={textInput} onKeyPress={keyPressed} value={inputtake}/>
    <Buttonclk className="btn btn-primary" onClick = {handleclick} input="Add"/>
    <Listitem  item={list}/>
    </div>
  );
}

export default App;
