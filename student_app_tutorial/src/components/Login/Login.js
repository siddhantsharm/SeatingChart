import React, { useContext, useState } from "react";
import { MyContext } from "../../contexts/MyContext";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../Copyright/Copyright";
import "./Login.css";


function Login() {
  
  const{loginUser, isLoggedIn} = useContext(MyContext);
  const initialState = {
    userInfo: {
      username: "",
      password: "",
    },
    errorMsg: "",
    successMsg: "",
  }

  const[state, setState] = useState(initialState);

  let successMsg = "";
  let errorMsg = "";
  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        [e.target.name]: e.target.value,
      },
    });
  };
  const submitForm = async (event) => {
      event.preventDefault();
      const data = await loginUser(state.userInfo);
      if(data.success && data.token) {
        setState({
          ...initialState,
        });
        localStorage.setItem("loginToken", data.token);
        await isLoggedIn();
      } else {
        setState({
          ...state,
          successMsg:"",
          errorMsg: data.message,
        });
      }
  };
  


  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar
          src={require("../../Photos/ucbseal.png")}
          className={classes.avatar}
        ></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={submitForm} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User ID"
            name="username"
            autoComplete="username"
            autoFocus
            value={state.userInfo.username}
            onChange={onChangeValue}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={state.userInfo.password}
            onChange={onChangeValue}
          />
          <div>
            {errorMsg}
            {successMsg}
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Login;
