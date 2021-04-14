import React, { useEffect } from "react"; // import react in files that use React (i.e. JSX)
import Seat from "../Seat/Seat.js"; // import seat components
import { classData, currentUser, studentData } from "../../data.js";
import logo from "../../Photos/podium.png"; // Import Podium Image.
import { useState, useContext } from "react";
import { MyContext } from "../../contexts/MyContext.js";
import Modal from "../Seat/Modal.js";
import UnselectModal from "../Seat/UnselectModal.js";

// import hardcoded data

function Chart(props) {
  /* constructor() {
    super();
    const seatsArray = [];
    var i;
    for (i = 0; i < 27; i++) {
      seatsArray.push(studentData[i]);
    }
    // setting the state of each chart according to the data corresponding to it's classroom.
    this.state = {
      seats: seatsArray,
      studentData: studentData,
      classData: classData,
      selected: false,
      getSeatData: useContext(MyContext),
    };
  }
  */

  const [seats, setSeats] = useState(false);
  const [selected, setSelected] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [unselectModalShow, setUnselectModalShow] = useState(false);
  const { getSeatData, updateSeatData } = useContext(MyContext);
  const [occupied, setOccupied] = useState(false);
  const [occupiedBy, setOccupiedBy] = useState("");
  const [seatNum, setSeatNum] = useState(0);

  // Seat rendering function to effficiently render a seat with all necessary data passed in as props.

  const fetchSeats = async () => {
    const data = await getSeatData(props.className);

    if (data.success && data.Seats) {
      setSeats(data.Seats);
    }
  };

  const updateSeat = async () => {
    const seatInfo = {
      occupied: occupied,
      occupiedBy: occupiedBy,
      seatNum: seatNum,
      course: props.className,
    };
    console.log(seatInfo);

    const data = await updateSeatData(seatInfo);
    console.log(data);
    if (data.success === 0) {
      setSelected(!selected);
      setModalShow(false);
      setUnselectModalShow(true);
    }
    window.location.reload();
  };

  const openModal = (number) => {
    setOccupied(true);
    setOccupiedBy(
      props.currentUser.firstName + " " + props.currentUser.lastName
    );
    setSeatNum(number);
    setModalShow(true);
  };

  const openModalUnselect = (number) => {
    setOccupied(false);
    setOccupiedBy(null);
    setSeatNum(number);
    setUnselectModalShow(true);
  };

  useEffect(() => {
    fetchSeats();
  });

  /* select(i) {
    if (!this.state.seats[i].blocked) {
      const seatsCopy = this.state.seats.slice();
      if (!seatsCopy[i].occupied && !this.state.selected) {
        seatsCopy[i].name = this.props.currentUser.name;
        seatsCopy[i].pronouns = this.props.currentUser.pronouns;
        seatsCopy[i].sid = this.props.currentUser.sid;
        seatsCopy[i].img = this.props.currentUser.img;
        seatsCopy[i].occupied = !seatsCopy[i].occupied;
        this.setState({
          seats: seatsCopy,
          selected: !this.state.selected,
        });
      } else if (seatsCopy[i].occupied && this.state.selected) {
        seatsCopy[i].name = null;
        seatsCopy[i].pronouns = null;
        seatsCopy[i].sid = null;
        seatsCopy[i].img = require("../../Photos/chris.png");
        seatsCopy[i].occupied = !seatsCopy[i].occupied;
        this.setState({
          seats: seatsCopy,
          selected: !this.state.selected,
        });
      }
    }
  } 
  */

  const items = [];
  var i;
  // for loop rendering Seats by parsing through each index of the studentsData array.

  for (i = 0; i < seats.length; i++) {
    //adding each Seat instance to the items array.
    let currSeat;
    currSeat = (
      <Seat
        occupied={seats[i].occupied}
        blocked={false}
        occupiedBy={seats[i].occupiedBy}
        sid={seats[i].seatNumber}
        pronouns={"he/him/his"}
        x={seats[i].x}
        y={seats[i].y}
        img={require("../../Photos/chris.png")}
        onClick={openModal}
        onUnselect={openModalUnselect}
        currentUser={props.currentUser}
        seatNum={seats[i].seatNumber}
      />
    );
    items.push(currSeat);
  }

  // Variable Containing all Seat instances of the chart.

  const style = {
    width: "125px",
    height: "125px",
    position: "absolute",
    left: "765px",
    top: "75px",
  };

  return (
    //Array containing each Seat Instance is returned.
    <React.Fragment>
      <img src={logo} alt="Podium" style={style} />

      {items}
      <Modal
        seatNum={seatNum}
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSubmit={() => updateSeat()}
      />
      <UnselectModal
        seatNum={seatNum}
        show={unselectModalShow}
        onHide={() => setUnselectModalShow(false)}
        onSubmit={() => updateSeat()}
      />
    </React.Fragment>
  );
}
export default Chart; // export the component so it can be imported and used in other components
