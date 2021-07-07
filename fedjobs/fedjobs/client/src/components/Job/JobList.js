import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Job } from "./Job";
import { JobDataContext } from "../../providers/JobsDataProvider";
import Button from "reactstrap/lib/Button";

export const JobList=() => {
  
  const { jobs} = useContext(JobDataContext);
  

  return (
    <>
      
      {jobs.map((job) => { 
  
         console.log("this is my single job in a loop", job)

        return(
            <Job 
              key={job.id}
              colorScheme={"blue"}
              jobProp={job}
            />
        )
      })}
      
      
    </>   


)

    }

