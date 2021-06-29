
import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { JobDataContext } from "../providers/JobsDataProvider";

export default function Go() {
  const history = useHistory();
  const {getJobs}  = useContext(JobDataContext);

  

  const searchSubmit = (e) => {
    e.preventDefault();
    getJobs()
      
  };


  return (
    <Form onSubmit={searchSubmit}>
      <fieldset>
        <FormGroup>
          <Label for="email">Email</Label>
          {/* <Input id="email" type="text" onChange={e => setEmail(e.target.value)} /> */}
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          {/* <Input id="password" type="password" onChange={e => setPassword(e.target.value)} /> */}
        </FormGroup>
        <FormGroup>
          <Button>Login</Button>
        </FormGroup>
        <em>
          Not registered? <Link to="register">Register</Link>
        </em>
      </fieldset>
    </Form>
  );
}