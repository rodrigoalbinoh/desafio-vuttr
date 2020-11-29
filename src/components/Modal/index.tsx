import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

interface ModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#FFFFFF',
          color: '#000000',
          borderRadius: '8px',
          maxWidth: '736px',
          width: '90%',
          border: 'none',
          padding: '0',
        },
        overlay: {
          backgroundColor: '#121214e6',
          overflowY: 'scroll',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
