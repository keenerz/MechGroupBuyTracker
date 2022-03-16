import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Listing } from "../component/listing";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header close>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Listing />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        className="key__button btn btn-primary "
        onClick={() => setModalShow(true)}
      >
        Create a Project
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
