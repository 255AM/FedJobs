import React, { useContext, useEffect, useState } from "react";
import { JobDataContext, JobsDataProvider } from "../../providers/JobsDataProvider";
import {useParams} from "react-router-dom"
import { Card, CardImg, CardBody, CardHeader, Button, Badge } from "reactstrap";



export const JobDetails = () => {
    let x
    let {jobId} = useParams();

    const { jobs, getJobs } = useContext(JobDataContext);

    const [ detailJob, setDetailJob ] = useState({});

    const getJobById = (jobId) => {
        x = jobs.find(element => element.MatchedObjectId == jobId)       
    }
    getJobById(jobId)
useEffect(() => {
    }, [])

    return (
        <>
            {}
            <Card className="m-8">
                <CardHeader>{x?.MatchedObjectDescriptor.PositionTitle}</CardHeader>
                <CardHeader>{x?.MatchedObjectDescriptor.PositionURI}</CardHeader>
                <CardHeader>{x?.MatchedObjectDescriptor.PositionLocationDisplay}</CardHeader>
                <CardHeader>{x?.MatchedObjectDescriptor.OrganizationName}</CardHeader>
                <CardHeader>{x?.MatchedObjectDescriptor.DepartmentName}</CardHeader>
                <CardHeader>{x?.MatchedObjectDescriptor.QualificationSummary}</CardHeader>
            </Card>
        </>
    )
}



  
  