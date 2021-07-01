import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardHeader } from "reactstrap";
import Button from "reactstrap/lib/Button";


export const Job = ({colorScheme, jobProp}) => {
  console.log("color scheme", colorScheme)
  console.log("jobProp", jobProp)
  
// console.log(job+'hrere');
  const history = useHistory();
    
  return (
    
    <Card className="m-8">
      <CardHeader>
        <strong>{jobProp.MatchedObjectDescriptor.PositionTitle}</strong>
      </CardHeader>
      <CardBody>
      <p className="text-left px-2">Location: {jobProp.MatchedObjectDescriptor.PositionLocation[0].CityName}</p>
      <p className="text-left px-2">Organization: {jobProp.MatchedObjectDescriptor.OrganizationName}</p>
      <p className="text-left px-2">Department: {jobProp.MatchedObjectDescriptor.DepartmentName}</p>

      </CardBody>
      
        
      
      
      </Card>
  );
}
//modify api 
//boolean on category model``

