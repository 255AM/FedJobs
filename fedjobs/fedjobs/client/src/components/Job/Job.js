import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardHeader } from "reactstrap";
import Button from "reactstrap/lib/Button";
import { FaStar,FaRegStar } from 'react-icons/fa';
import { JobDetails } from "./JobDetails";
import { Link } from "react-router-dom";


export const Job = ({colorScheme, jobProp}) => {
  console.log("color scheme", colorScheme)
  console.log("jobProp", jobProp)
  
// console.log(job+'hrere');
  const history = useHistory();

  
    
  return (
    
    <Card className="m-8">
      <CardHeader class='card-header'>
      
      
          <Link to={`/jobs/details/${jobProp.MatchedObjectId}`}>
            <strong>
              {jobProp.MatchedObjectDescriptor.PositionTitle}
            </strong>
          </Link> 
          
         
      </CardHeader>

      <CardBody>
        <p className="text-left px-2"><strong>Locations: </strong>{jobProp.MatchedObjectDescriptor.PositionLocation.map((location)=><li>{location.LocationName}</li>)}</p>
        <p className="text-left px-2"><strong>Organization:<br></br>  
                    </strong> {jobProp.MatchedObjectDescriptor.OrganizationName}</p>
        <p className="text-left px-2"><strong>Department:<br></br> </strong>{jobProp.MatchedObjectDescriptor.DepartmentName}</p>
        {/* <FaStar />
        <FaRegStar /> */}
      </CardBody>
      
    </Card>

  )
}
//modify api 
//boolean on category model``

