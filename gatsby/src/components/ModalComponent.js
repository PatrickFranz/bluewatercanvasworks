import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalComponent = (title = 'Title', body = 'Body', ...props) => {
  console.log(props);

  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
