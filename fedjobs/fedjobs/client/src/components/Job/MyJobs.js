import React, { useContext, useEffect } from "react";
import { JobDataContext } from "../../providers/JobsDataProvider";
import {UserJobCard} from "./UserJobCard";

export const MyJobs = () => {
    // import the posts state variable and getUserPosts function 
    // from the PostContext
    const { myJobs, getUserJobs } = useContext(JobDataContext);

    // use the useEffect Hook to fetch data
    useEffect(() => {
        getUserJobs();
    }, []);


    // return a <div> containing a separate card for each Post in list of posts
    return (
        <>
             {myJobs.map((job) => { 
  
            console.log("this is my single job in a loop", job)

 return(
     <UserJobCard 
       key={job.id}
       colorScheme={"blue"}
       jobProp={job}
     />
 )
})}
        </>
    );
};

