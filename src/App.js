import { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [isShow, setIsShow] = useState(false);
  const handleOpenModal = () => {
    setIsShow(true);
    console.log("handleOpenModal is working");
  };
  return (
    <div className="App">
      <div className="show-offer">
        <button className="offer-btn" onClick={handleOpenModal}>
          Show Offer
        </button>
      </div>
      {isShow && <Modal />}
    </div>
  );
}

export default App;
