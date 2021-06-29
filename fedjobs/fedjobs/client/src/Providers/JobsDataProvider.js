import React, { useState, useEffect, createContext } from "react";
import { Spinner } from "reactstrap";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";

export const JobDataContext = createContext();

export function JobsDataProvider(props) {
  

const getJobs = (userAgent, authKey) =>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization-Key", "fdsa");
    myHeaders.append("User-Agent", "lanecw@gmail.com");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://data.usajobs.gov/api/search?", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      
      .catch(error => console.log('error', error));
}

//   const login = (email, pw) => {
//     return firebase.auth().signInWithEmailAndPassword(email, pw)
//       .then((signInResponse) => { 
//         // debugger
//        return getUserProfile(signInResponse.user.uid)
//       });
//   };

//   const logout = () => {
//     return firebase.auth().signOut()
//       .then(() => {
//         sessionStorage.clear()
//         setIsLoggedIn(false);
//       });
//   };

//   const register = (userProfile, password) => {
//     return firebase.auth().createUserWithEmailAndPassword(userProfile.email, password)
//       .then((createResponse) => saveUser({ ...userProfile, firebaseUserId: createResponse.user.uid }))
//       .then((savedUserProfile) => {
//         sessionStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
//         setIsLoggedIn(true);
//       });
//   };

//   const getToken = () => firebase.auth().currentUser.getIdToken();
//   //https://localhost:5001/api/userprofile
//   const getUserProfile = (firebaseUserId) => {
//     return getToken().then((token) =>
//       fetch(`https://localhost:5001/api/userprofile/${firebaseUserId}`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//       .then(resp => resp.json()))
//       .then((userProfile) => {
//         sessionStorage.setItem("userProfile", JSON.stringify(userProfile));
//         setIsLoggedIn(true);
//       });
//   };

//   const saveUser = (userProfile) => {
//     return getToken().then((token) =>
//       fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(userProfile)
//       }).then(resp => resp.json()));
//   };

//   const getPost = (id) => {
//     return fetch(`/api/post/${id}`).then((res) => res.json());
// };

  return (
    <JobDataContext.Provider value={{ getJobs}}>
      {props.children
       }
        
        
    </JobDataContext.Provider>
  );
}
