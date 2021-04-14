import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import StudentDashboard from "../StudentDashboard/Dashboard";
import InstructorDashboard from "../InstructorDashboard/Dashboard";
import AdminDashboard from "../AdminDashboard/Dashboard";
import Login from '../Login/Login';
import ProfilePage from '../Profile/ProfilePage';
import FaceQuiz from '../face_quiz'
import{users} from '../../data.js';
import useToken from './useToken';
import CS61A from '../Charts/class61A';
import Bl from '../Charts/classBl';


function App() {
  //const [token, setToken] = useState();
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  var i;
  var currentUser;
  for (i = 0; i < users.length; i++) {
    if (users[i].username === token) {
      currentUser = users[i];
    }
  }
  console.log(currentUser);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/login"]}>
          <Login setToken={setToken} />
        </Route>
        <Route exact path="/class61A">
          <CS61A currentUser={currentUser} />
        </Route>
        <Route exact path="/classBl">
          <Bl currentUser={currentUser} />
        </Route>
        <Route exact path="/student-dashboard">
          <StudentDashboard currentUser={currentUser} />
        </Route>
        <Route exact path="/admin-dashboard">
          <AdminDashboard currentUser={currentUser} />
        </Route>
        <Route exact path="/instructor-dashboard">
          <InstructorDashboard currentUser={currentUser} />
        </Route>
        <Route exact path="/Profile">
          <ProfilePage currentUser={currentUser} />
        </Route>
        <Route exact path="/face-quiz">
          <FaceQuiz />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
