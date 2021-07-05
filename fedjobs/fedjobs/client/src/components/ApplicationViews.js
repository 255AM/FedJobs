import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

import {JobList} from "./Job/JobList";
import {JobDetails} from "./Job/JobDetails"



import Login from "./Login"; 
import Register from "./Register";
import Hello from "./Hello";
import SearchBar from "./SearchBar";



export default function ApplicationViews() {
  // import the isLoggedIn state variable from the UserProfileContext
  const { isLoggedIn } = useContext(UserProfileContext);


  return (
    <main>
      {/* Use a Switch to provide and handle different routing options within the App */}
      <Switch>
        {/* Define the Home path as "/". Use the isLoggedIn state variable to 
        manage what the user sees based on their login status. If they are logged in,
        display a welcome message. If not, redirect them to the login page*/}
        <Route exact path="/">
          {isLoggedIn ? < SearchBar />  : <Redirect to="/login" />}
        </Route>
        {/*----------------Authentication Routes----------------- */}
        {/* Define the Login path as "/login". */}
        <Route path="/login">
          <Login />
        </Route>

        {/* Define the Register path as "/register". */}
        <Route path="/register">
          <Register />
        </Route>

        {/*----------------Job Routes----------------- */}
        <Route exact path="/jobs">
          {isLoggedIn ? <JobList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/jobs/details/:jobId(\d+)">
          {isLoggedIn ? 
          
            <JobDetails /> 
            : 
            <Redirect to="/login" />}
        </Route>
          
        

        {/*-----------------POST ROUTES--------------------*/}
        
        

      </Switch>
    </main>
  );
};
