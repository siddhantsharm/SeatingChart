import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ClassIcon from "@material-ui/icons/Class";
import PersonIcon from "@material-ui/icons/Person";

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/Dashboard">
      <ListItemIcon>
        <ClassIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItem>
    <ListItem button component="a" href="Profile">
      <ListItemIcon>
        <PersonIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
  </div>
);
