import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import ProfilePage from '../Profile/ProfilePage';
import{users} from '../../data.js';
import useToken from './useToken';
import CS61A from '../Charts/class61A';
import Bl from '../Charts/classBl';
import FaceQuiz from '../FaceQuiz/FaceQuiz'


function App() {
   //const [token, setToken] = useState();
   const { token, setToken } = useToken();
   if(!token) {
    return <Login setToken={setToken} />
  }

  var i;
  var currentUser;
  for(i = 0; i < users.length; i++) {
    if(users[i].username === token) {
        currentUser = users[i];
    }
  }
  console.log(currentUser);


  return (
      <BrowserRouter>
        <Switch>
        <Route path="/class61A">
          <CS61A currentUser = {currentUser} />
        </Route>
        <Route path="/classBl">
          <Bl currentUser = {currentUser} />
        </Route>

          <Route path="/dashboard">
            <Dashboard
            currentUser = {currentUser} />
          </Route>
          <Route path="/FaceQuiz">
            <FaceQuiz
            currentUser = {currentUser} />
          </Route>
          <Route path="/Profile">
          <ProfilePage currentUser = {currentUser}/>
          </Route>
          <Route path="/">
            <Dashboard
            currentUser = {currentUser} />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
