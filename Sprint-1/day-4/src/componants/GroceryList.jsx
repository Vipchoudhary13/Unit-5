export const GroceryItem = ({title, id, Delete}) =>{
  return <>
  <div className="list">
    <div>
    {title}
    </div>
    <button onClick={() => Delete(id)}>Delete</button>
  </div>
  </>
}