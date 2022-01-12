import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryItem } from "./GroceryList";


export const Grocery = () =>{
  const [list, setList] = useState([]);
  const handClick = (data) =>{
    setList([...list, data])
    // console.log("data parenet:", data);
  }

  const Delete = (id)=>{
    console.log("Delete", id);
    let oldItem = [...list];
    console.log("oldItem", oldItem)
    let item = oldItem.filter((e, i) => {
      return i !== id;
    });
    setList(item);
  }

  return <>
   <GroceryInput getdata={handClick}/>
   {list.map((e, i) => (
     <GroceryItem key={i} id={i} title={e} Delete={Delete}/>
   ))}
  </>
};