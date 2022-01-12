import { useState } from "react";

export const GroceryInput = ({ getdata }) => {
  const [text, setText] = useState("");
  const handChange = (e) => {
    setText(e.target.value);
  };

  const handClick = () => {
    // console.log(text);
    getdata(text);
  };
  return (
    <>
      <h1>
        <u>Grocery list</u>
      </h1>
      <input type="text" placeholder="Enter Item" onChange={handChange} />
      <button onClick={handClick}>Add to List</button>
      <hr></hr>
    </>
  );
};
