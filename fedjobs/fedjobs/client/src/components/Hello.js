
import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { JobDataContext } from "../providers/JobsDataProvider";

export default function Go() {
  const history = useHistory();
  const {getJobs}  = useContext(JobDataContext);

  const [keyword, setKeyword] = useState();
  const [location, setLocation] = useState();

  const searchSubmit = (e) => {
    e.preventDefault();
    getJobs()
      
  };


  return (null);
}