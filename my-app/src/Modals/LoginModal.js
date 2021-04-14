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

const LoginModal = (props) => {
  const { buttonLabel, className } = props;
  /*
    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
  
    const toggle = () => setModal(!modal);
    const changeUnmountOnClose = e => {
        let value = e.target.value;
        setUnmountOnClose(JSON.parse(value));
    } */

  const { loginUser } = useContext(MyContext);
  const initialState = {
    userInfo: {
      username: "",
      password: "",
    },
    errorMsg: "",
    successMsg: "",
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
    const data = await loginUser(state.userInfo);
    if (data.success && data.token) {
      setState({
        ...initialState,
      });
      setResponse(data.token);
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
      <p> username: {state.userInfo.username},</p>
      <p>password: {state.userInfo.password},</p>
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
          login.php{" "}
          <Badge color="success" className="mr-2">
            GET
          </Badge>
        </ModalHeader>
        <ModalBody>
          <InputGroup className="mb-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>username</InputGroupText>
            </InputGroupAddon>
            <Input
              name="username"
              value={state.userInfo.username}
              onChange={onChangeValue}
              placeholder="username"
              autoComplete="off"
            />
          </InputGroup>
          <InputGroup name="password">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>password</InputGroupText>
            </InputGroupAddon>
            <Input
              name="password"
              value={state.userInfo.password}
              onChange={onChangeValue}
              placeholder="password"
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

export default LoginModal;
