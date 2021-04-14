import React from 'react'; // import react
import Popover from "react-bootstrap/Popover"; // import popover from react-bootstrap library
import OverlayTrigger from "react-bootstrap/OverlayTrigger"; // import OverlayTrigger from react-bootstrap library
import 'bootstrap/dist/css/bootstrap.min.css'; // import react-bootstrap CSS for Popover and OverLayTrigger
import {currentUser} from '../../data.js'; // import hardcoded data
import Draggable from 'react-draggable';
import './Seat.css'



class Seat extends React.Component {
	constructor(props) {
		super(props)
		// Set state of seat component according to the props.
		this.state = {

			occupied: this.props.occupied,
			blocked: this.props.blocked,
			sid: this.props.sid,
			name: this.props.name,
			pronouns: this.props.pronouns,
			xseatId: this.props.xseatId,
			yseatId: this.props.yseatId,
			img: this.props.img,
		};
	}

	/** Onclick function for each seat.
	* If the seat is Unoccupied set it's state to occupied and all other states
	* of the seat to the 'currentUser' data.
	* If occupied, reset the seat to it's unoccupied state.
	* The function ensures that any seat occupied by any user beside the 'currentUser'
	* cannot be selected.
	*/
	select() {
		if(!this.props.blocked) {
			this.setState({occupied: !this.props.occupied});
			if (!this.props.occupied) {
				this.setState({
					name: currentUser.name,
					pronouns: currentUser.pronouns,
					sid: currentUser.sid,
					img: currentUser.img
					});
			} else {
				this.setState({
					name: null,
					pronouns: null,
					sid: null,
					img: require('../../Photos/chris.png')
					});
			}
		}

	}



	render() {
		// Variable to pass in custom positioning for each seat parsed in through the props.
		const position = {
			position: "absolute",
			left: this.props.xseatId,
			top:this.props.yseatId,
			};
		// Dimension of Student image for popover
		const style = {
			width: "250px",
			};
		// sid of the student occupying the seat instance.
		var sid;
		// Pronouns of the student occupying the seat instance.
		var pronouns;

		// Conditional Statement to determine the messages for popover.
		if (this.props.name == null) {
			sid = "Empty Seat";
		} else {
			if(this.props.name == this.props.currentUser.name) {
			sid = "SID: " + this.props.sid;
			pronouns = "Pronouns: " + this.props.pronouns;
		} else {
			sid = "Occupied Seat";
		}
	}
		// Popover for each seat instance.
		const popover1 = (
  		<Popover id="popover-basic">
    	<Popover.Content>
				<div><center>{sid}</center></div>
				<div><center>{pronouns}</center></div>
    	</Popover.Content>
  		</Popover>
		);

		const popover2 = (
  		<Popover id="popover-basic">
    	<Popover.Title as="h3"><div><img src={this.props.img} alt="Student" style={style}/></div><center>{this.props.name}</center></Popover.Title>
    	<Popover.Content>
				<div><center>{sid}</center></div>
				<div><center>{pronouns}</center></div>
    	</Popover.Content>
  		</Popover>
		);
		// Considitional Statement to change the CSS of Seat Component if the seat gets occupied.
		// Occupied: true -->  Seat Color (red --> green).
		let className = "seat-active";
		if(this.props.occupied == true) {
			className = "seat";
		}
		let popover = popover1;
		if(this.props.name == this.props.currentUser.name) {
			popover = popover2
		}

		return (
			// OverLayTrigger, triggers the popover to the 'right' when 'hovering' over a seat instance.
			<Draggable>
			<OverlayTrigger trigger="hover" placement="right" overlay={popover}>
				<button className={className} style={position} onClick={() => this.props.onClick()} />
			</OverlayTrigger>
			</Draggable>
		 )
 		}
	};

export default Seat;
