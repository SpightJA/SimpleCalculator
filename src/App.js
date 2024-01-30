import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
  const [input, setinput] = useState(0);
  
  function plus(e) {
    // Plus the current result by the given input
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
  }; 
 
  function minus(e) {
    // Minus the current result by the given input
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) {
    // Multiply the current result by the given input
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    // Divide the current result by the given input
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) {
    // Reset the current input
    e.preventDefault(); 
    inputRef.current.value = 0; 

  }; 
 
  function resetResult(e) {
    // Reset the result
    e.preventDefault(); 
    setResult(() => 0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1>
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>times</button> 
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
