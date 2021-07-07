import React, { useState, useEffect, useContext, createContext } from "react";
import { Spinner } from "reactstrap";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";

import { UserProfileContext } from "./UserProfileProvider";

export const JobDataContext = React.createContext();

export function JobsDataProvider(props) {
  const [ jobs, setJobs ] = useState([]);
  const [ myJobs, setMyJobs ] = useState([]);
  const { getToken } = useContext(UserProfileContext);
  const apiUrl = "/api/Job"
  

  const getJobs = (keyword, location) =>{
      var myHeaders = new Headers();
      myHeaders.append("Authorization-Key", "m/hQgdmgYzTjdcP5IkS8Pbda87BgWCr3OpHsyIhiyR0=");
      myHeaders.append("User-Agent", "lanecw@gmail.com");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
    
    fetch(`https://data.usajobs.gov/api/search?Keyword=${keyword}&LocationName=${location}`, requestOptions)
      .then(response => response.json())
      .then(resp => {
        console.log(resp)
        setJobs(resp.SearchResult.SearchResultItems)
        
      })
      .catch(error => console.log('error', error));
}

  // Provider method to retrieve all of the posts authored by the current user 
  // by sending a GET request based on the Current User's ID
  // to the Web API with a firebase Token for authentication.
  const getUserJobs = () => {
    const UserProfile = JSON.parse(sessionStorage.getItem("userProfile"));
    // debugger
    getToken().then((token) =>
        fetch(`${apiUrl}/MyJobs/${UserProfile.id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }))
      .then(resp => resp.json())
      .then(setMyJobs);
  };




const addJob = (job) => {
  // savejob to users save list
  //return getToken().then((token) =>
    fetch("/api/Job", {
          method: "POST",
          headers: {
              //Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
          },
          body: JSON.stringify(job)
        })
        .then(resp => resp.json())
};



  return (
    <JobDataContext.Provider value={{ getJobs, jobs, setMyJobs, myJobs, getUserJobs, addJob}}>
      {props.children
       }
        
        
    </JobDataContext.Provider>
  );
}
