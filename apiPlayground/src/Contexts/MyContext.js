import React, { createContext, Component } from "react";
import axios from "axios";
export const MyContext = createContext();

// Define the base URL
const Axios = axios.create({
  baseURL: "http://localhost/apimock/",
});

class MyContextProvider extends Component {
  constructor() {
    super();
    this.isLoggedIn();
  }

  // Root State
  state = {
    showLogin: false,
    isAuth: false,
    theUser: null,
    classes: [],
  };

  // Toggle between Login & Signup page
  toggleNav = () => {
    const showLogin = !this.state.showLogin;
    this.setState({
      ...this.state,
      showLogin,
    });
  };

  // On Click the Log out button
  logoutUser = () => {
    localStorage.removeItem("loginToken");
    this.setState({
      ...this.state,
      showLogin: true,
      isAuth: false,
    });
  };

  updateUserInfo = async (user) => {
    // Sending the user registration request
    const userInfo = await Axios.post("updateUser.php", {
      firstname: user.firstname,
      lastname: user.lastname,
      pronouns: user.pronouns,
      username: user.username,
      currUser: user.currentUser,
      password: user.password,
    });

    return userInfo.data;
  };

  updateSeatData = async (user) => {
    // Sending the user registration request

    const seatInfo = await Axios.post("updateSeat.php", {
      occupied: user.occupied,
      occupiedBy: user.occupiedBy,
      seatNum: user.seatNum,
      course: user.course,
    });

    return seatInfo.data;
  };

  loginUser = async (user) => {
    // Sending the user Login request
    const login = await Axios.post("login.php", {
      username: user.username,
      password: user.password,
    });

    console.log(login.data);
    return login.data;
  };

  getSeatData = async (cN) => {
    // Sending the user Login request
    const seatData = await Axios.post("seatData.php", {
      className: cN,
    });
    return seatData.data;
  };

  // Checking user logged in or not
  isLoggedIn = async () => {
    const loginToken = localStorage.getItem("loginToken");

    // If inside the local-storage has the JWT token
    if (loginToken) {
      //Adding JWT token to axios default header
      Axios.defaults.headers.common["Authorization"] = "bearer " + loginToken;

      // Fetching the user information
      const { data } = await Axios.get("user-info.php");

      // If user information is successfully received
      if (data.success && data.user) {
        this.setState({
          ...this.state,
          showLogin: false,
          isAuth: true,
          theUser: data.user,
          classes: data.user.classes,
        });
      }
      console.log(data);
    }
  };
  //Wait for component to mount before changing state.
  componentDidMount() {
    const loginToken = localStorage.getItem("loginToken");
    if (!loginToken) {
      this.setState({
        showLogin: true,
        isAuth: false,
        theUser: null,
      });
    }
  }

  render() {
    const contextValue = {
      rootState: this.state,
      toggleNav: this.toggleNav,
      isLoggedIn: this.isLoggedIn,
      updateUserInfo: this.updateUserInfo,
      loginUser: this.loginUser,
      logoutUser: this.logoutUser,
      getSeatData: this.getSeatData,
      updateSeatData: this.updateSeatData,
    };
    return (
      <MyContext.Provider value={contextValue}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyContextProvider;
