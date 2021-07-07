
import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { JobDataContext } from "../providers/JobsDataProvider";

export default function SearchBar() {
  const history = useHistory();
  const {getJobs}  = useContext(JobDataContext);
  const [keyword, setKeyword] = useState();
  const [location, setLocation] = useState();

  const submitSearch = (e) => {
    e.preventDefault();
    

    //the search will not occur unless a keyword or location is defined(see onSubmit in jsx. If the search is to occur however, and one of the fields is not defined, the search will be hindered. This ensures that if 1 field is not defined, the search will occur with an empty string for best results)
    if (!keyword){
      getJobs(' ', location)
      history.push("/jobs")
    }
    if (!location){
      getJobs(keyword, ' ')
      history.push("/jobs")
    }
    
  };

return (
    <Form onSubmit={(!keyword || keyword === ' ') && (!location || location === ' ') ?
    console.log('Please select a Keyword or location to search'):
    submitSearch}>
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