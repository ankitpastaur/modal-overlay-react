import { useState } from "react";
import Modal from "./Modal";
import "./App.css";
import OfferModal from "./OfferModal";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [offer, setOffer] = useState(false);

  const handleOpenModal = () => {
    setIsShow(true);
    console.log("handleOpenModal is working");
  };

  const handleCancel = () => {
    setIsShow(false);
  };

  const handleShowOffer = () => {
    setOffer(true);
    setIsShow(false);
  };
  return (
    <div className="App">
      {!offer && (
        <div className="show-offer">
          <button className="offer-btn" onClick={handleOpenModal}>
            Show Offer
          </button>
        </div>
      )}

      {offer && <OfferModal />}

      {isShow && (
        <Modal handleCancel={handleCancel} handleShowOffer={handleShowOffer} />
      )}
    </div>
  );
}

export default App;
