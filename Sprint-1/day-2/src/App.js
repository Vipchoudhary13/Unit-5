import logo from './logo.svg';
import './App.css';

function App() {
  const arr1 = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const arr2 = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating System
      </h1>
      <ul>
        {arr1.map((e) =>(
          // <li>{e}</li>  
          <List1 item={e} />        
        ))}
      </ul>

      <h1>Mobile Menufacturers</h1>
      <ul>
        {arr2.map((e) =>(
          <List2 item={e} />
        ))}
      </ul>
    </div>
  );
}

function List1({item}){
  return <ul>
    <li>{item}</li>
  </ul>
}

function List2({item}){
  return <ul>
    <li>{item}</li>
  </ul>
}

export default App;
