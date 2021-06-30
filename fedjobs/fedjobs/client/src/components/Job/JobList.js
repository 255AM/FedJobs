import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Job } from "./Job";
import { JobDataContext } from "../../providers/JobsDataProvider";
import Button from "reactstrap/lib/Button";

export const JobList=() => {
  const history = useHistory();
  const { jobStore } = useContext(JobDataContext);
  

  

  useEffect(() => {
    console.log('chngesd!')
    
  }, [jobStore])

  return (
    <div className="container">

      {/* <div><Button onClick={() => history.push("/jobs/add")}>Create Category</Button></div>*/}
      <div className="row justify-content-center"> 
        
        <div className="cards-column">
            {/* {// sorting categories alphabetically
            // categories.sort((a, b) => a.name.localeCompare(b.name))
            //map through all categories in database 
            jobStore.map((job) => (
            <Job key={job.id}job={job} />
            ))} */}
        </div>
      </div>
    </div>

  );
}



// //AnimalList is exported and called at appviews when route is /animals. 
// export const AnimalList = () => {
//     //Bringing these in at AnimalContext.Provider on the provider file
//   const { animals, getAnimals, searchTerms, filterTerms } = useContext(AnimalContext)
  

//   // Since you are no longer ALWAYS displaying all of the animals
//   // set filteredAnimals to state as empty array
//   const [ filteredAnimals, setFiltered ] = useState([])
//   const [ filteredSpecies, setFilteredSpecies ] = useState([])
//   //use history to change route as needed
//   const history = useHistory()

//   // Empty dependency array - useEffect only runs after first render, will not run the 2nd time because of the empty dependancy array
//   useEffect(() => {
//       getAnimals()
//   }, [])

//   // useEffect dependency array with dependencies - will run if dependency changes (state)
//   // searchTerms will cause a change
//   useEffect(() => {
//     if (searchTerms !== "0") {
//       // If the search field is not blank, display matching animals
//       //subset is array of animals with matchign chars (all forced to lower case)
//       const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
//       //calling setFiltered with subset as argument. Changes state, useEffect will run each time because of dependancy (constantly monitoring??)
//       setFiltered(subset)
//     } else {
//       // If the search field is blank, display all animals
//       setFiltered(animals)
//     }
//   }, [searchTerms, animals])