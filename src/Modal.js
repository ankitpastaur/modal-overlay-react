const Modal = ({ handleCancel, handleShowOffer }) => {
  const handleOutsideClick = (e) => {
    console.log(e.target.className);
    if (e.target.className === "modal") {
      handleCancel();
    }
  };
  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={handleCancel}>
          X
        </button>
        <div className="content">
          Click the button below to accept the amazing offer
        </div>
        <button className="accept-btn" onClick={handleShowOffer}>
          Accept offer
        </button>
      </div>
    </div>
  );
};

export default Modal;
