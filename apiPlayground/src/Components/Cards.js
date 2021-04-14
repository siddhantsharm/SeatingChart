import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
} from "reactstrap";
import {
  GET,
  POST,
  PUT,
  DELETE,
  STUDENT,
  ADMIN,
  PROFESSOR,
} from "../Constants/constants.js";

const Cards = (props) => {
  let color;
  if (props.data.type === STUDENT) {
    color = "primary";
  } else if (props.data.type === ADMIN) {
    color = "danger";
  } else {
    color = "dark";
  }
  let requests = props.data.requests.map((request) => {
    if (request === GET) {
      return (
        <Badge color="success" className="mr-2">
          {request}
        </Badge>
      );
    } else if (request === POST) {
      return (
        <Badge color="info" className="mr-2">
          {request}
        </Badge>
      );
    } else if (request === PUT) {
      return (
        <Badge color="warning" className="mr-2">
          {request}
        </Badge>
      );
    } else if (request === DELETE) {
      return (
        <Badge color="danger" className="mr-2">
          {request}
        </Badge>
      );
    }
  });
  return (
    <React.Fragment>
      <Card
        body
        inverse
        style={{
          backgroundColor: "#333",
          borderColor: "#333",
          width: "100%",
        }}
        color={color}
        className="mx-auto my-2"
      >
        <CardTitle tag="h5">{props.data.endpoint}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {requests}
        </CardSubtitle>
        <CardText>{props.data.description} </CardText>
        <Button color="warning" onClick={() => props.data.modalMethod()}>
          Test API
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Cards;
