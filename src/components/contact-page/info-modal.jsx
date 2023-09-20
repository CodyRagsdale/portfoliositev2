import React from 'react';
import './info-modal.scss';

const InfoModal = ({ show, onClose }) => {
  return (
    show && (
      <div className="modal-overlay">
        <div className="modal-content">
          <p>
            By filling out the fields, you will be sending an email that
            contacts me directly. Please ensure that your email address in the
            form is correct so that I'm able to respond to you.
          </p>
          <p className="pleaForKindness">& Please be nice?</p>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default InfoModal;
