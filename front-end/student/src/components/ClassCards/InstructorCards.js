/*
 * Creates a React card for each class, when selected redirects to seating chart.
 */
import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';

import {classData, users} from '../../data.js' // Import Harcoded Data

// Styling for Classes cards in classes page.
const useStyles = makeStyles((theme) => ({
  classesContext: {
    flex: 1,
  },
  buttonSpacing: {
    spacing: 2
  }
}));

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 38,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    marginLeft: 20,
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export default function ClassCards(props) {
  // add custom styling here
  const classes = useStyles();
  const courseName = props.courseName;
  let currentClass;

  /* searching for the correct class data,
  just for our current dummy data, currently there are no null checks */
  console.log(users)
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
      <Typography color="secondary" className={classes.classesContext}>
        {currentClass.room}
      </Typography>
      <div>
        <Button variant="outlined" color="inherit" href={currentClass.link}>
          {" "}
          {/* eventually change href tag to each seating chart's link */}
          Select Class
        </Button>
        <StyledButton variant="outlined" color="primary" href='/face-quiz' >
          {/* eventually change href tag to each face quiz for each class */}
          Face Quiz
        </StyledButton>
      </div>
    </React.Fragment>
  );
}
