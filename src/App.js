import React, { useState } from 'react';
import "./App.css";

function App() {
  // const [displayValue, setDisplayValue] = useState("");
  const [values, setValues] = useState([]);

   const [value1s, setValues1] = useState([]);
   const [displayValue, setDisplayValue] = useState("");


  const handleButtonClick = (value) => {
    if(["+", "-", "*", "/","0","%","."].includes(value)){
      if(displayValue===""){
        return;
      }
    }

    if (["+", "-", "*", "/"].includes(value)) {
      setValues1(prevValues => [...prevValues, displayValue, value]);
       setDisplayValue("");
    } else {
      setDisplayValue(prevValue => prevValue + value);
    }

   

  };





  const deleteDisplay = () => {
    setDisplayValue("");
    setValues1([]);
  };





  const calculateResult = () => {
  

    if(displayValue===""){
      return;
    }

    setValues1(prevValues => [...prevValues, displayValue]);
    const expression = value1s.join(" ") + " " + displayValue;
    // if(eval(expression).toString()===displayValue){
    //   console.log(value1s[value1s.length-1])
    //   const expression = value1s.join(" ") + " " + (displayValue*displayValue);
    //   setDisplayValue(eval(expression).toString());
    //   console.log("equla")
    // }
    // else{
    try {
        setDisplayValue(eval(expression).toString());
      } catch (error) {
        setDisplayValue("Error");
      }
        setValues1([]);
    // }
  };





  const changePosition = () => {
    if(displayValue===""){
      return;
    }
  let updatedValues = displayValue;
  updatedValues=Number(updatedValues);
  setDisplayValue(updatedValues)
  if(displayValue>0){
    setDisplayValue(displayValue*(-1));
   
  }else if(displayValue<0){
    setDisplayValue(displayValue*(-1));
  }
  console.log(displayValue);


  };





  return (
    <div className="App">
      <input 
        className='results' 
        id='results' 
        readOnly 
        value={displayValue} 
       
      />
      <div className='calculator'>
      <div>
        <button className='AC' onClick={deleteDisplay}>AC</button>
        <button className='plus-minus' onClick={changePosition}>+/-</button>
        <button className='percentage' onClick={() => handleButtonClick("%")}>%</button>
        <button className='fractional' onClick={() => handleButtonClick("/")}>/</button>
        </div>
        <div>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button className='dual' onClick={() => handleButtonClick("*")}>x</button>
        </div>
        <div>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button className='minus' onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button className='plus' onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div>
        <button className='zero' onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button className='equla' onClick={calculateResult}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
