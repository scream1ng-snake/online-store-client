import React from 'react';
import Modal from "react-bootstrap/Modal";

export default function ModalHeader({title}) {
  return (
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {title}
      </Modal.Title>
    </Modal.Header>
  )
}
