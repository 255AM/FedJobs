import React, { useContext, useEffect, useState } from "react";
import { JobDataContext, JobsDataProvider } from "../../providers/JobsDataProvider";
import {useParams, Link} from "react-router-dom"
import { Card, CardImg, CardBody, CardHeader, Button, Badge } from "reactstrap";
import { FaStar,FaRegStar } from 'react-icons/fa';



export const JobDetails = () => {
    let x
    let {jobId} = useParams();
    let locations

    const loggedInUserId = JSON.parse(sessionStorage.getItem("userProfile")).id;

    const { jobs, getJobs } = useContext(JobDataContext);
    const { addJob  } = useContext(JobDataContext);

    const [ detailJob, setDetailJob ] = useState({});

    const getJobById = (jobId) => {
        x = jobs.find(element => element.MatchedObjectId == jobId) 
           
    }
    getJobById(jobId)

    const saveJob = (x) =>{
        addJob({

            Title: x.MatchedObjectDescriptor.PositionTitle,
            Link:x.MatchedObjectDescriptor.PositionURI,
            Location: x.MatchedObjectDescriptor.PositionLocationDisplay,
            Organization: x.MatchedObjectDescriptor.OrganizationName,
            Department: x.MatchedObjectDescriptor.DepartmentName,
            Requirements: x.MatchedObjectDescriptor.QualificationSummary,
            JobId: x.MatchedObjectId,
            TeleWork: false,
            Category: x.MatchedObjectDescriptor.JobCategory[0].Name,
            Schedule: x.MatchedObjectDescriptor.PositionSchedule[0].Name,
            Duties:x.MatchedObjectDescriptor.UserArea.Details.MajorDuties[0],
            DateOpened:x.MatchedObjectDescriptor.PublicationStartDate,
            DateClose:x.MatchedObjectDescriptor.ApplicationCloseDate,
            Education:x.MatchedObjectDescriptor.UserArea.Details.Education,
            userId: loggedInUserId


            
            
        })
        
    }

    useEffect(() => {
    }, [])

    return (
        <>
            {}
            <Card className="m-8">
                <CardHeader>
                <div>
                    <FaRegStar onClick={() => {
                        saveJob(x)
                        console.log('here')
                    }}
                        class='fav unselected' fontSize="2em"/>
                </div>
                <div>
                    <strong>
                        {x?.MatchedObjectDescriptor.PositionTitle}
                    </strong> 
                </div>
                
                </CardHeader>
                
                <CardHeader>
                    <div>
                        <Link to={{pathname: x?.MatchedObjectDescriptor.PositionURI}}target = "_blank">Link to Official Listing</Link>
                    </div>
                </CardHeader>
                
                <CardHeader><strong>Locations: </strong>{x?.MatchedObjectDescriptor.PositionLocation.map((location)=><li>{location.LocationName}</li>)}</CardHeader>
                <CardHeader><strong>Organization:<br></br>  
                    </strong> {x?.MatchedObjectDescriptor.OrganizationName}</CardHeader>
                <CardHeader><strong>Department:<br></br> </strong>{x?.MatchedObjectDescriptor.DepartmentName}</CardHeader>
                <CardHeader><strong>Responsibilities:</strong><br></br> {x?.MatchedObjectDescriptor.UserArea.Details.MajorDuties}</CardHeader>
            </Card>
        </>


    )
}



