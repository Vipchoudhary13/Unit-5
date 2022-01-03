function Todo(){
  const addRecipe = () =>{
    let info = document.createComment("p");
    info.innerHTML = `<p>{First, rinse 1.5 cups of basmati rice (300 grams) in clean water until the water runs clear of starch. You can use a bowl or colander to rinse the rice. Make sure you soak the rice grains in water for 30 minutes after rinsing them.  While the basmati rice is soaking, use that time to prep the other ingredients. First, you will want to rinse, peel and chop all of the veggies. This will make the process of cooking go by much quicker.}</p>`
    
    document.querySelector(".info-box").appendChild(info);
  }
  return <div className="main-box">
  <div className="flex">
    <div className="add-box">Add Recipe
    </div>
    <div className="Recipe-box">
      <div className="item">
        <img src="https://foodish-api.herokuapp.com/images/samosa/samosa13.jpg"/>
        <div>
          <h4>samosa</h4>
          <button onClick={() => addRecipe()}>Add</button>
        </div>
      </div>
      <div className="item">
        <img src="https://foodish-api.herokuapp.com/images/pizza/pizza67.jpg"/>
        <div>
          <h4>samosa</h4>
          <button onClick={() => addRecipe()}>Add</button>
        </div>
      </div>
      <div className="item">
        <img src="https://foodish-api.herokuapp.com/images/pasta/pasta7.jpg"/>
        <div>
          <h4>samosa</h4>
          <button onClick={() => addRecipe()}>Add</button>
        </div>
      </div>
      <div className="item">
        <img src="https://foodish-api.herokuapp.com/images/burger/burger42.jpg"/>
        <div>
          <h4>samosa</h4>
          <button onClick={() => addRecipe()}>Add</button>
        </div>
      </div>
      <div className="item">
        <img src="https://foodish-api.herokuapp.com/images/rice/rice14.jpg"/>
        <div>
          <h4>samosa</h4>
          <button onClick={() => addRecipe()}>Add</button>
        </div>
      </div>
    </div>
  </div>
  <div className="info-box">Recipe Information</div>
</div>
} 

export default Todo;