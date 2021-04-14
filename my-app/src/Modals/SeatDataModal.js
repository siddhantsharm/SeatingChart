import React, { useContext, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  Badge,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Jumbotron,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";
import { MyContext } from "../Contexts/MyContext";

const SeatDataModal = (props) => {
  const { buttonLabel, className } = props;

  const { getSeatData } = useContext(MyContext);
  const initialState = {
    userInfo: {
      className: "",
    },
  };
  const [state, setState] = useState(initialState);
  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const [response, setResponse] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();
    const data = await getSeatData(state.userInfo.className);
    if (data.message === "Seat request succesful.") {
      setState({
        ...initialState,
      });
      let display = data.Seats.map((point) => (
        <div>
          <p> &#123; </p>
          <p>id: {point.id.toString()},</p>
          <p>occupied: {point.occupied.toString()},</p>
          <p>x: {point.x},</p>
          <p>y: {point.y},</p>
          <p>occupiedBy: {point.occupiedBy},</p>
          <p>seatNumber: {point.seatNumber.toString()}</p>
          <p>&#125;,</p>
        </div>
      ));
      setResponse(display);
    } else {
      setState({
        ...state,
        successMsg: "",
        errorMsg: data.message,
      });
    }
  };
  let sampleRequest = (
    <div>
      <p> &#123; </p>
      <p> className: {state.userInfo.className}</p>
      <p>&#125;</p>
    </div>
  );
  let showResponse;
  if (response !== null) {
    showResponse = (
      <Toast
        style={{
          width: "100%",
        }}
      >
        <ToastHeader>Response</ToastHeader>
        <ToastBody>
          <p class="text-break">{response}</p>
        </ToastBody>
      </Toast>
    );
  }

  let closeModal = () => {
    setResponse(null);
    props.toggle();
  };

  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={closeModal} className={className}>
        <ModalHeader toggle={closeModal}>
          seatData.php{" "}
          <Badge color="success" className="mr-2">
            GET
          </Badge>
        </ModalHeader>
        <ModalBody>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Class Name</InputGroupText>
            </InputGroupAddon>
            <Input
              name="className"
              value={state.userInfo.className}
              onChange={onChangeValue}
              placeholder="Class Name"
              autoComplete="off"
            />
          </InputGroup>
          <Toast
            style={{
              width: "100%",
            }}
          >
            <ToastHeader>Request Syntax</ToastHeader>
            <ToastBody>{sampleRequest}</ToastBody>
          </Toast>
          {showResponse}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitForm}>
            Send Request
          </Button>{" "}
          <Button color="secondary" onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SeatDataModal;
