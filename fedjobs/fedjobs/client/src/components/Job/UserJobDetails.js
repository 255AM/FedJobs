import React, { useContext, useEffect, useState } from "react";
import { JobDataContext, JobsDataProvider } from "../../providers/JobsDataProvider";
import {useParams} from "react-router-dom"
import { Card, CardImg, CardBody, CardHeader, Button, Badge } from "reactstrap";
import { FaStar,FaRegStar } from 'react-icons/fa';



export const UserJobDetails = () => {
    let x
    let {jobId} = useParams();

    const { myJobs } = useContext(JobDataContext);
    const { addJob  } = useContext(JobDataContext);

    const [ detailJob, setDetailJob ] = useState({});

    const getJobById = (jobId) => {
        x = myJobs.find(element => element.id == jobId) 
    }
    getJobById(jobId)

    
        
    

    useEffect(() => {
    }, [])

    return (
        <>
            {}
            <Card className="m-8">
                <CardHeader>{x?.title}</CardHeader>
                
                <CardHeader>{x?.link}</CardHeader>
                <CardHeader>{x?.location}</CardHeader>
                <CardHeader>{x?.organization}</CardHeader>
                <CardHeader>{x?.department}</CardHeader>
                <CardHeader>{x?.requirements}</CardHeader>
            </Card>
        </>
    )
}



  
  