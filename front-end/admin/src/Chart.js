import React from 'react';	// import react in files that use React (i.e. JSX)
import DraggableSeat from './DraggableSeat.js'; // import seat components
import Draggable from 'react-draggable';
import Container from 'react-bootstrap/Container';
import podium from './podium.png';
import Button from 'react-bootstrap/Button'

class Chart extends React.Component {
	constructor(){
		super()
		// Setting default state for chart component.
		this.state = {
		Podium: false,
		seatNo: 0,
		}
		this.add_Seats = this.add_Seats.bind(this);
		this.add_Podium = this.add_Podium.bind(this);
	}
	// Onclick function for adding seat.
	add_Seats(i) {

		this.setState({
			seatNo: this.state.seatNo + 1,
		});
	}
	// Onclick function for adding podium
	add_Podium() {

		this.setState({
			Podium: true,
		});
	}
	// Function for rendering seats according to seatNo.
	renderSeats(i) {
		return(
			<DraggableSeat
			sID={i}

				/>

		);
	}

	render() {
			// Variable Containing all Seat instances of the chart.
			const items =[];
			var i;
			// for loop rendering the exact number of seats requested by the user.
			for(i = 0; i < this.state.seatNo; i++){
				//adding each Seat instance to the items array.
				items.push(this.renderSeats(i));
			}
			// Position for the 'Add Seat' Button.
			const addSeatButtonposition = {
				position: "absolute",
				left: 530,
				top:670,
				};
			// Position for the 'Add Podium' Button.
			const addPodiumButtonposition = {
					position: "absolute",
					left: 633,
					top:670,
					};
			// Position for the 'Upload Schematic Button'
			const uploadSchematicButtonposition = {
					position: "absolute",
						left: 755,
						top:670,
					};
			// Boolean to check if a podium has been added already.
			const isPodium = this.state.Podium;

			return (
				//Array containing each Seat Instance is returned.
				<React.Fragment>
				{items}

				{
					// Ensures that only one podium is rendered.
					isPodium
					? <Draggable><img src = {podium}></img></Draggable>
					: <h1></h1>
				}
				{/* 'Add Seat' button calling the add_Seats function. */}
					<Button variant="primary" style={addSeatButtonposition} onClick={this.add_Seats}>
					Add Seat
					</Button>
					{/* 'Add Podium' button calling the add_Podium function. */}
					<Button variant="secondary" style={addPodiumButtonposition} onClick={this.add_Podium}>
					Add Podium
					</Button>
					{/* 'Upload Schematic' button will call the uploadSchematic function which will upload all seat locations to a database. */}
					<Button variant="info" style={uploadSchematicButtonposition}>
					Upload Schematic
					</Button>
					{/* Box for class metadata. */}
					<div className="box">
					<p> Class: Berkeley Law 101 </p>
					<p> Professor: Devin Jones </p>
					<p> No. of Seats: {this.state.seatNo} </p>
					</div>

				</React.Fragment>


			)
 	}
};
export default Chart; // export the component so it can be imported and used in other components
