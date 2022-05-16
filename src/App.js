import {useState} from "react";
import "./styles.css";
import HomePage from "./Components/HomePage";

export default function App() {
  const [showModal,setShowModal]=useState(false);
  return (
    <div className="App">
     <HomePage />
    </div>
  );
}
