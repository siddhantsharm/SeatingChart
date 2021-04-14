import React, { useState } from "react"; // import react
import Popover from "react-bootstrap/Popover"; // import popover from react-bootstrap library
import OverlayTrigger from "react-bootstrap/OverlayTrigger"; // import OverlayTrigger from react-bootstrap library
import "bootstrap/dist/css/bootstrap.min.css"; // import react-bootstrap CSS for Popover and OverLayTrigger
import { currentUser } from "../../data.js"; // import hardcoded data
import Draggable from "react-draggable";
import "./Seat.css";

function Seat(props) {
  const initialState = {
    occupied: props.occupied,
    blocked: props.blocked,
    occupiedBy: props.occupiedBy,
    course: props.course,
    seatNum: props.seatNum,
    x: props.x,
    y: props.y,
    img: props.img,
    currentUser: props.currentUser,
  };

  const [state, setState] = useState(initialState);

  /** Onclick function for each seat.
   * If the seat is Unoccupied set it's state to occupied and all other states
   * of the seat to the 'currentUser' data.
   * If occupied, reset the seat to it's unoccupied state.
   * The function ensures that any seat occupied by any user beside the 'currentUser'
   * cannot be selected.
   */
  /* select() {
    if (!this.props.blocked) {
      this.setState({ occupied: !this.props.occupied });
      if (!this.props.occupied) {
        this.setState({
          name: currentUser.name,
          pronouns: currentUser.pronouns,
          sid: currentUser.sid,
          img: currentUser.img,
        });
      } else {
        this.setState({
          name: null,
          pronouns: null,
          sid: null,
          img: require("../../Photos/chris.png"),
        });
      }
    }
  }
  */

  // Variable to pass in custom positioning for each seat parsed in through the props.
  const position = {
    position: "absolute",
    left: state.x,
    top: state.y,
  };
  // Dimension of Student image for popover
  const style = {
    width: "250px",
  };
  // sid of the student occupying the seat instance.
  var status;
  // Pronouns of the student occupying the seat instance.
  var pronouns;

  // Conditional Statement to determine the messages for popover.
  if (state.occupied == true) {
    status = "Occupied Seat";
  } else if (state.occupied == false) {
    status = "Empty Seat";
  }

  // Popover for each seat instance.
  const defaultPopover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <div>
          <center>{status}</center>
        </div>
      </Popover.Content>
    </Popover>
  );

  const userPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        <div>
          <img src={state.img} alt="Student" style={style} />
        </div>
      </Popover.Title>
      <Popover.Content>
        <center>{state.occupiedBy}</center>
      </Popover.Content>
    </Popover>
  );
  // Considitional Statement to change the CSS of Seat Component if the seat gets occupied.
  // Occupied: true -->  Seat Color (red --> green).
  let className = "available-seat";
  let popover = defaultPopover;
  let modalShow = () => props.onClick(props.seatNum);

  if (state.occupied) {
    let userName =
      state.currentUser.firstName + " " + state.currentUser.lastName;
    className = "occupied-seat";
    modalShow = null;
    if (state.occupiedBy === userName) {
      className = "user-seat";
      popover = userPopover;
      modalShow = () => props.onUnselect(props.seatNum);
    }
  }

  return (
    // OverLayTrigger, triggers the popover to the 'right' when 'hovering' over a seat instance.
    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
      <button className={className} style={position} onClick={modalShow} />
    </OverlayTrigger>
  );
}

export default Seat;
