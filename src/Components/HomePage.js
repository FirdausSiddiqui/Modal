import React,{useState} from "react";
import Modal from "./Modal";

export default function(){

  const [showModal ,setShowModal]=useState(false);
  const makeModalVisible =()=>{
    setShowModal(true);
  }
  return(
  <div>
     <h2>Show Modal</h2>
      <button onClick={makeModalVisible}> Show</button>
      {showModal && <Modal closeModal={setShowModal}/>}
  </div>
  )
}