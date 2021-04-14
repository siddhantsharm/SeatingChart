import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Copyright from '../Copyright/Copyright';
import { users } from "../../data";

import './Login.css';


let usersLogin = new Map();
usersLogin.set("siddhant_sharma", "password");
usersLogin.set("agam_jolly", "password");
usersLogin.set("chris_chi", "password");
usersLogin.set("devin_jones", "password");
usersLogin.set("siddhant_sharma", "password");
usersLogin.set("ebru_odok", "password");
usersLogin.set("ethan_lee", "password");
usersLogin.set("eve_lin", "password");
usersLogin.set("kate_li", "password");
usersLogin.set("lara_chu", "password");
usersLogin.set("marcela_siqueira", "password");
usersLogin.set("rachel_lee", "password");
usersLogin.set("yiling_kao", "password");
usersLogin.set("samiya_mehreen", "password");

async function loginUser(credentials) {
  if(usersLogin.has(credentials.username) && usersLogin.get(credentials.username) === credentials.password) {
    return credentials.username;
  }
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    var i;
    var currentUser;
    for (i = 0; i < users.length; i++) {
      if (users[i].username === token) {
        currentUser = users[i];
      }
    }
    if (currentUser || token) {
      window.location.href = currentUser.type + "-dashboard";
    }
  } catch (error) { 
    console.log(500)
  }
  }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar src={require('../../Photos/ucbseal.png')} className={classes.avatar}>

        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User ID"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setUserName(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
          />
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
