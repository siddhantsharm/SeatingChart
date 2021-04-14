import { useState } from "react";

import { Card, Button, CardTitle, CardText } from "reactstrap";
import Cards from "./Cards.js";
import { Container, Row, Col } from "reactstrap";
import ModalExample from "../Modals/ModalExample";
import LoginModal from "../Modals/LoginModal.js";
import SeatDataModal from "../Modals/SeatDataModal.js";
import UserInfoModal from "../Modals/UserInfoModal";
import {
  GET,
  POST,
  PUT,
  DELETE,
  STUDENT,
  ADMIN,
  PROFESSOR,
  API,
} from "../Constants/constants.js";
import TopNav from "./Navbar";
import React from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [seatDataModal, setSeatDataModal] = useState(false);
  const [userInfoModal, setUserInfoModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  let api = [
    {
      endpoint: "login.php",
      description:
        "Authenticates the user and provides User Authentication Token.",
      requests: [GET],
      type: STUDENT,
      modalMethod: () => setLoginModal(!loginModal),
    },
    {
      endpoint: "user-info.php",
      description: "Fetches User Info/Data from the Institutional Server.",
      requests: [GET],
      type: STUDENT,

      modalMethod: () => setUserInfoModal(!userInfoModal),
    },
    {
      endpoint: "updateUser.php",
      description: "Upates User Info/Data in the Institutional Sever.",
      requests: [PUT],
      type: STUDENT,

      modalMethod: toggle,
    },
    {
      endpoint: "seatData.php",
      description:
        "Fetches all Seat data of a particular classroom from the Server.",
      requests: [GET],
      type: STUDENT,

      modalMethod: () => setSeatDataModal(!seatDataModal),
    },
    {
      endpoint: "updateSeat.php",
      description: "Selects/Unselects specified seat. ",
      requests: [PUT],
      type: STUDENT,

      modalMethod: toggle,
    },
    {
      endpoint: "admin.php",
      description: "Place Holder for Admin api's.",
      requests: [PUT],
      type: ADMIN,

      modalMethod: toggle,
    },
    {
      endpoint: "admin.php",
      description: "Place Holder for Admin api's.",
      requests: [GET],
      type: ADMIN,

      modalMethod: toggle,
    },
    {
      endpoint: "admin.php",
      description: "Place Holder for Admin api's.",
      requests: [POST],
      type: ADMIN,

      modalMethod: toggle,
    },
    {
      endpoint: "admin.php",
      description: "Place Holder for Admin api's.",
      requests: [GET],
      type: ADMIN,

      modalMethod: toggle,
    },
    {
      endpoint: "admin.php",
      description: "Place Holder for Admin api's.",
      requests: [POST],
      type: ADMIN,

      modalMethod: toggle,
    },
    {
      endpoint: "admin.php",
      description: "Place Holder for Admin api's.",
      requests: [PUT],
      type: ADMIN,

      modalMethod: toggle,
    },
    {
      endpoint: "professor.php",
      description: "Place holder for professor api's.",
      requests: [PUT],
      type: PROFESSOR,

      modalMethod: toggle,
    },
    {
      endpoint: "professor.php",
      description: "Place holder for professor api's.",
      requests: [DELETE],
      type: PROFESSOR,

      modalMethod: toggle,
    },
    {
      endpoint: "professor.php",
      description: "Place holder for professor api's.",
      requests: [POST],
      type: PROFESSOR,

      modalMethod: toggle,
    },
    {
      endpoint: "professor.php",
      description: "Place holder for professor api's.",
      requests: [DELETE],
      type: PROFESSOR,

      modalMethod: toggle,
    },
    {
      endpoint: "professor.php",
      description: "Place holder for professor api's.",
      requests: [GET],
      type: PROFESSOR,

      modalMethod: toggle,
    },
  ];

  const [state, setState] = useState(api);

  let apiCards = state.map((api) => {
    return (
      <Col sm="3">
        <Cards data={api} />
      </Col>
    );
  });
  return (
    <React.Fragment>
      <TopNav />
      <Container fluid>
        <Row className="my-2 ">{apiCards}</Row>
        <ModalExample
          isOpen={modal}
          toggle={toggle}
          className="login"
          buttonLabel="button"
        />
        <LoginModal
          isOpen={loginModal}
          toggle={() => setLoginModal(!loginModal)}
          className="login"
          buttonLabel="button"
        />
        <SeatDataModal
          isOpen={seatDataModal}
          toggle={() => setSeatDataModal(!seatDataModal)}
          className="Seat Data"
          buttonLabel="button"
        />
        <UserInfoModal
          isOpen={userInfoModal}
          toggle={() => setUserInfoModal(!userInfoModal)}
          className="userInfo"
          buttonLabel="button"
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
