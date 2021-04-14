/* Styling for Classes page. Lists class cards for the current user */

import React, { useContext } from "react";
import clsx from "clsx";
import { MyContext } from "../../contexts/MyContext";

import { makeStyles } from "@material-ui/core/styles";
import ClassCards from "../ClassCards/ClassCards.js";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Container, Row } from "shards-react";
import { currentUser } from "../../data.js"; // Import Harcoded Data

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "Column",
  },
  fixedHeight: {
    height: 240,
    marginLeft: 100,
    marginRight: 100,
  },
}));

export default function Classes() {
  const { rootState } = useContext(MyContext);
  const { theUser } = rootState;
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const cards = [];

  /* looping through list of current user's classes, and generating class cards*/
  for (var i = 0; i < theUser.classes.length; i += 1) {
    console.log(theUser.classMetaData[i]);
    cards.push(
      <Paper className={fixedHeightPaper}>
        <ClassCards courseData={theUser.classMetaData[i]} />
      </Paper>
    );

    cards.push(<Row noGutters className="page-header py-4"></Row>);
  }

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4"></Row>
      <Grid item xs={12}>
        {cards}
      </Grid>
    </Container>
  );
}
