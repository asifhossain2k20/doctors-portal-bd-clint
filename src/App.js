import React, { createContext, useState } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import AllPatients from "./components/AllPatients/AllPatients";
import AddService from "./components/DashBoard/AddService/AddService/AddService";
import Login from "./components/Login/Login";
import PriavateRoute from "./components/PriavateRoute/PriavateRoute";
import Admin from "./components/DashBoard/Admin/Admin/Admin";
import User from "./components/DashBoard/User/User";
import AddDoctor from "./components/DashBoard/AddDoctor/AddDoctor";
import Review from "./components/DashBoard/Review/Review";
import Blogs from "./components/Blogs/Blogs";
import Developer from "./components/Developer/Developer";


export const UserContext =createContext();


function App() {
  const [loggedInUser,setLoggedinUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedinUser]}>
    <Router>
        <Switch>
        <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/developer">
            <Developer></Developer>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PriavateRoute exact path="/admin">
            <Admin></Admin>
          </PriavateRoute>
          <PriavateRoute exact path="/addReview">
            <Review></Review>
          </PriavateRoute>
          <PriavateRoute exact path="/addDoctor">
            <AddDoctor></AddDoctor>
          </PriavateRoute>
          <PriavateRoute exact path="/user">
            <User></User>
          </PriavateRoute>
          <PriavateRoute exact path="/appointment">
            <Appointment></Appointment>
          </PriavateRoute>
          <PriavateRoute exact path="/dashboard/appointment">
            <DashBoard></DashBoard>
          </PriavateRoute>
          <PriavateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PriavateRoute>
          <PriavateRoute path="/addService">
            <AddService></AddService>
          </PriavateRoute>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
