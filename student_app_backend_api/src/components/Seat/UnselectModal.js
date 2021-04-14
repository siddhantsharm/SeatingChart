import React, { useState } from "react"; // import react
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
function UnselectModal(props) {
  return (
    <React.Fragment>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirm Selection
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={1} md={4}></Col>
              <Col xs={1} md={4}></Col>
              <Col xs={1} md={4}>
                <p> Seat No. </p>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={8}>
                Are you sure you want to unselect this seat?
              </Col>
              <Col xs={12} md={4}>
                <h1 style={{ textAlign: "center" }}> {props.seatNum} </h1>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.onSubmit}>
            Yes
          </Button>

          <Button variant="danger" onClick={props.onHide}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default UnselectModal;
