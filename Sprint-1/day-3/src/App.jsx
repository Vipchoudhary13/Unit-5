import "./styles.css";
import { useState } from "react";

export default function App() {
  // const arr = ["vipul", "dharmesh", "vikas"];
  let [count, setCount] = useState(1);
  const changeCount = (value) => {
    // setCount(count + value);
    setCount((prev) => {
      if (prev === 20 || prev < 1) {
        return 1;
      }
      return prev + value;
    });
  };

  const Double = () => {
    setCount((prev) => {
      if (prev > 100) {
        return 1;
      }
      return prev * 2;
    });
  };

  // const subOne = () =>{
  //   if(count > 0){
  //     setCount(count-1);
  //   }
  // }

  // if(count > 10){
  //   return <h2>Counter Reached the max value</h2>
  // }
  return (
    <div className="App">
      {/* <h1>Hello Ract</h1>
      {arr.map((e)=>(
        <Todos name={e}>
          
        </Todos>
      ))} */}
      <h3>counter: {count}</h3>
      {/* {count < 10 &&(
      <div>
        <button onClick={() => changeCount(1)}>Add 1</button>
        <button onClick={() => changeCount(-1)}>Sub 1</button>
      </div>  
      )}; */}
      <div>
        <button onClick={() => changeCount(1)}>Add 1</button>
        <button onClick={() => changeCount(-1)}>Sub 1</button>
        <button onClick={Double}>Double</button>
        <div>Counter is {count % 2 === 0 ? "Even" : "Odd"}</div>
      </div>
    </div>
  );
}
