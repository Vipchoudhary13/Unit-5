import logo from './logo.svg';
import './App.css';

function App() {
  const arr1 = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const arr2 = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      {/* Hello React
      <h1 style={{
        color: "red",
        fontSize: "40px",
        background: "blue",
      }}>Heading 1</h1>
      <img src={logo} width={500}/> */}
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
