import "./styles.css";
import { Job } from "./components/Job";
import { Login } from "./components/Login";
import { Admin } from "./components/Admin";
import { Nav } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Job />
      <Nav />
      <Routes>
        <Route path="./components/Login" element={<Login />}></Route>
        <Route Root="./components/Admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}
