import React from "react"; // import react in files that use React (i.e. JSX)
import Seat from "../Seat/Seat.js"; // import seat components
import { classData, studentData } from "../../data.js";
import logo from "../../Photos/podium.png"; // Import Podium Image.

// import hardcoded data

class Chart extends React.Component {
  constructor() {
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
    };
  }

  // Seat rendering function to effficiently render a seat with all necessary data passed in as props.
  renderSeats(i) {
    return (
      <Seat
        occupied={this.state.seats[i].occupied}
        blocked={this.state.seats[i].blocked}
        name={this.state.seats[i].name}
        sid={this.state.seats[i].sid}
        pronouns={this.state.seats[i].pronouns}
        xseatId={this.state.seats[i].seatId[0]}
        yseatId={this.state.seats[i].seatId[1]}
        img={this.state.seats[i].img}
        onClick={() => this.select(i)}
        currentUser={this.props.currentUser}
      />
    );
  }

  select(i) {
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

  render() {
    // Variable Containing all Seat instances of the chart.
    const items = [];
    var i;
    // for loop rendering Seats by parsing through each index of the studentsData array.
    for (i = 0; i < 27; i++) {
      //adding each Seat instance to the items array.
      items.push(this.renderSeats(i));
    }
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
      </React.Fragment>
    );
  }
}
export default Chart; // export the component so it can be imported and used in other components
