import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Button from '@material-ui/core/Button';


let users = new Map();
users.set("siddhant_sharma", "password");
users.set("agam_jolly", "password");
users.set("chris_chi", "password");
users.set("devin_jones", "password");
users.set("siddhant_sharma", "password");
users.set("ebru_odok", "password");
users.set("ethan_lee", "password");
users.set("eve_lin", "password");
users.set("kate_li", "password");
users.set("lara_chu", "password");
users.set("marcela_siqueira", "password");
users.set("rachel_lee", "password");
users.set("yiling_kao", "password");
console.log(users);

async function loginUser(credentials) {
  if(users.has(credentials.username) && users.get(credentials.username) === credentials.password) {
    return credentials.username;
  }

 /* return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json()) */
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    console.log(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <Button variant="contained" color="secondary" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
