/*
 * Creates a React card for each class, when selected redirects to seating chart.
 */
import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../Title/Title";
import { classData } from "../../data.js"; // Import Harcoded Data

// Styling for Classes cards in classes page.
const useStyles = makeStyles({
  classesContext: {
    flex: 1,
  },
});

export default function ClassCards(props) {
  // add custom styling here
  const classes = useStyles();
  const courseName = props.courseName;
  let currentClass;

  /* searching for the correct class data,
  just for our current dummy data, currently there are no null checks */
  for (var i = 0; i < classData.length; i += 1) {
    if (courseName === classData[i].name) {
      currentClass = classData[i];
      break;
    }
  }

  return (
    // All contents of the card, React Fragment so content styling and components
    //(like view class button) can easily be copied to multiple class cards
    <React.Fragment>
      <Title>{currentClass.professor}</Title>
      <Typography component="p" variant="h4">
        {currentClass.name}
      </Typography>
      <Typography color="textSecondary" className={classes.classesContext}>
        {currentClass.room}
      </Typography>
      <div>
        <Button variant="outlined" color="primary" href={currentClass.link}>
          {" "}
          {/* eventually change href tag to each seating chart's link */}
          Select Seat
        </Button>
      </div>
    </React.Fragment>
  );
}
