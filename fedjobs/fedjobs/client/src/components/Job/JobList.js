import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Job } from "./Job";
import { JobDataContext } from "../../providers/JobsDataProvider";
import Button from "reactstrap/lib/Button";

export const JobList=() => {
  
  const { jobs, getJobs } = useContext(JobDataContext);
  

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





// jobId=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.PositionID,
      // title=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.PositionTitle,
      // link=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.PositionURI,
      // apply=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.ApplyURI[0],
      // //may need to index
      // location=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.PositionLocation,
      // //telework not easily extrapolated from api|html scraper?
      // telework=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.PositionID,
      // organization=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.OrganizationName,
      // department=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.DepartmentName,
      // jobCategory=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.JobCategory,
      // schedule=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.PositionSchedule[0].Name ,
      // requirements=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.QualificationSummary,
      // duties=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.UserArea.Details.MajorDuties,
      // openDate=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.PublicationStartDate,
      // closeDate=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.ApplicationCloseDate,
      // education=job.SearchResult.SearchResultItems[1].MatchedObjectDescriptor.UserArea.Details.Education