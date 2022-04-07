//import logo from './logo.svg';
import './App.css';
import Input from './Input/Input';
import { useState } from "react";
import Button from './Button/Button';
import ClearButton from './ClearButton/ClearButton';
import * as math from 'mathjs';

function App() {
  const [input, setInput]=useState("");
  const addInput=(val)=> {
  const output= input + val;
  setInput(output);
  };
  const clearInput = () => {
  setInput("");
  };
  const handleEqual = () => {
  const finalValue = math.evaluate(input);
  setInput(finalValue);
  };
  return (
    <div className="app">
     <div className="calc-wrapper">
       <Input input={input} />
       <div className="row">
         <Button handleClick={addInput}>7</Button>
         <Button handleClick={addInput}>8</Button>
         <Button handleClick={addInput}>9</Button>
         <Button handleClick={addInput}>/</Button>
       </div>
       <div className="row">
         <Button handleClick={addInput}>4</Button>
         <Button handleClick={addInput}>5</Button>
         <Button handleClick={addInput}>6</Button>
         <Button handleClick={addInput}>*</Button>
       </div>
       <div className="row">
         <Button handleClick={addInput}>1</Button>
         <Button handleClick={addInput}>2</Button>
         <Button handleClick={addInput}>3</Button>
         <Button handleClick={addInput}>+</Button>
       </div>
       <div className="row">
         <Button handleClick={addInput}>.</Button>
         <Button handleClick={addInput}>0</Button>
         <Button handleClick={handleEqual}>=</Button>
         <Button handleClick={addInput}>-</Button>
       </div>
       <div className="row">
         <ClearButton handleClear={clearInput}>Clear</ClearButton>
       </div>
     </div> 
    </div>
  );
}

export default App;
