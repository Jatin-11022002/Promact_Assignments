// SuccessModal.js
import React, { useState } from "react";
import "../styling/modal.css";

const Modal = ({ message, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="modal">
        <div className="modal-container">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content">
            <h2>Success!</h2>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
