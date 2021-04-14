import React, {useContext} from 'react'
import {MyContext} from '../../contexts/MyContext'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import ProfilePage from '../Profile/ProfilePage';
import CS61A from '../Charts/class61A';
import Bl from '../Charts/classBl';
import MyContextProvider from '../../contexts/MyContext';

// Importing the Login & Register Componet

function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    // If user Logged in
    if(isAuth)
    {
      console.log(theUser.img)
          return (
              <BrowserRouter>
                <Switch>
                <Route path="/class61A">
                  <CS61A currentUser = {theUser} />
                </Route>
                <Route path="/classBl">
                  <Bl currentUser = {theUser} />
                </Route>

                  <Route path="/dashboard">
                    <Dashboard
                    currentUser = {theUser} />
                  </Route>
                  <Route path="/Profile">
                  <ProfilePage currentUser = {theUser}/>
                  </Route>
                  <Route path="/">
                    <Dashboard
                    currentUser = {theUser} />
                  </Route>
                </Switch>
              </BrowserRouter>
          );
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
}

export default Home;
