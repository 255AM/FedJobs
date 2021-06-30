
import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { JobDataContext } from "../providers/JobsDataProvider";

export default function SearchBar() {
  const history = useHistory();
  const {getJobs}  = useContext(JobDataContext);

  const [jobStore, setJobStore] = useState();
  const [keyword, setKeyword] = useState();
  const [location, setLocation] = useState();

  const submitSearch = (e) => {
    e.preventDefault();
    
    getJobs(keyword, location)
      
  };

  



return (
    <Form onSubmit={submitSearch}>
      <fieldset>
        <FormGroup>
          <Label for="keyword">Job Title or Keyword</Label>
          <Input id="keyword" type="text" onChange={e => setKeyword(e.target.value)} /> 
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input id="location" type="text" onChange={e => setLocation(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Button>Search</Button>
        </FormGroup>
       
      </fieldset>
    </Form>
  );
}