import React from 'react'; // import react
import Popover from "react-bootstrap/Popover"; // import popover from react-bootstrap library
import OverlayTrigger from "react-bootstrap/OverlayTrigger"; // import OverlayTrigger from react-bootstrap library
import 'bootstrap/dist/css/bootstrap.min.css'; // import react-bootstrap CSS for Popover and OverLayTrigger
import Draggable from 'react-draggable';



class DraggableSeat extends React.Component {
	constructor(props) {
		super(props)
		// Set state of seat component according to the props.
		this.state = {
			sID: this.props.sID,
			xseatId: 0,
			yseatId: 0,

		};
	}

	select(data) {
		this.setState({
			xseatId: data.x,
			yseatId: data.y,
		});
	}



	render() {
		// Variable to pass in custom positioning for each seat parsed in through the props.
		const position = {
			position: "absolute",
			left: this.state.xseatId,
			top:this.state.yseatId,
			};

		//CSS for seat compononet
		let className = "seat-active";


		return (
		/* Draggable seat compononet with default position (0,0) which self updates location state according to current position */
			<Draggable onDrag={(e, data) => this.select(data)} defaultPosition={{x: 0, y: 0}}>
				<button className={className} style={position} >
				x: {this.state.xseatId} y: {this.state.yseatId}

				</button>
			</Draggable>
		 )
 		}
	};

export default DraggableSeat;
