import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "../listItems/listItems";
import NavHeader from "../navHeader/navHeader";
import Classes from "../Classes/Classes";
import SearchIcon from "@material-ui/icons/Search";
import { render } from "@testing-library/react";
import Chart from "../Charts/Chart";
import { propTypes } from "react-bootstrap/esm/Image";
import { Row, Col } from "shards-react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    background: "rgb(54,55,63)",
    color: "white",
    opacity: "1",
  },
  fixedHeight: {
    height: 240,
  },
}));
function signOut() {
  localStorage.clear();
  window.location.href = "/Dashboard";
}
export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const style = {
    background: "rgb(247,248,252)",
    //background:'black' ,
    color: "black",
  };
  console.log(props.currentUser.classes);
  console.log(window.location.pathname);

  let mainBody;
  let mainBodyHeader;
  if (window.location.pathname in props.currentUser.paths) {
    let course = props.currentUser.paths[window.location.pathname];
    console.log(course);
    mainBodyHeader = (
      <Row>
        <Col> Class: {course.name} </Col>
        <Col> Professor: {course.professor} </Col>
        <Col>Room: {course.room} </Col>
      </Row>
    );
    let settings = {
      currentUser: props.currentUser,
      className: course.apiEP,
    };

    mainBody = <Chart {...settings} />;
  } else {
    mainBodyHeader = "Courses";
    mainBody = <Classes />;
  }

  return (
    <div style={style} className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        style={style}
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {mainBodyHeader}
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            classes.drawerPaper,
            !open && classes.drawerPaperClose,
            classes.paper
          ),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <NavHeader currentUser={props.currentUser} />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Button variant="contained" color="Secondary" onClick={signOut}>
          {" "}
          Sign Out{" "}
        </Button>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {mainBody}
      </main>
    </div>
  );
}
