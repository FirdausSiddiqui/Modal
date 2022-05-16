
import "./Modal.css";

export default function Modal({closeModal}){
  
  const removeModal=()=>{
    closeModal(false)
  }
  return(
    <div className="modal-background">
    <div className="modal-box">
      <div className="header">
        <button className="cross-button" onClick={removeModal}>X</button>
      </div>

      <div className="body">
        <p> Click cancel or top X button to close this modal. </ p>
      </div>


      <div className="footer">
        <button onClick={removeModal}>Cancel</button>
      </div>
      
    </div>
  </div>
  )
}