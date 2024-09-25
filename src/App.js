import { useState } from "react";
import ProjectList from "./components/ProjectList";

// fake test data //

const projectsList = [
  {
    id: 0,
    name: "Dunes West Website",
    client: "Dunes West HOA",
    status: "In Progress",
    description: "This is a description of the project"
  },
  {
    id: 1,
    name: "Reactor Night Club Branding",
    client: "Maddie Entertainment",
    status: "Not Started",
    description: "This is a description of the project"
  },
  {
    id: 2,
    name: "Tween Social Club Advertising Campaign",
    client: "Town of MountP",
    status: "Planning",
    description: "This is a description of the project"
  },
  {
    id: 3,
    name: "VanReal Mobile App",
    client: "Pilyr",
    status: "Complete",
    description: "This is a description of the project"
  },
]

function App() {
  // to make a piece of state it typically is at the top of the function  and is done with 
  // setting a const and using square brackets [] and then the name of the state
  const [projectsStatusFilter, setProjectsStatusFilter] = useState("Planning");

  // make a variable to hold the filtered projects

  let filteredProjects 
  if (projectsStatusFilter === "All") {
    filteredProjects = projectsList
  }
  else {
    filteredProjects = projectsList.filter(project => project.status === projectsStatusFilter);
  }


  return (
    <div>
      <h1 className="m-4">Projects</h1>
      <div>
        <button className="btn btn-primary ms-4 me-2" onClick={() => setProjectsStatusFilter("All")}>All</button>
        <button className="btn btn-primary m-2" onClick={() => setProjectsStatusFilter("Not Started")}>Not Started</button>
        <button className="btn btn-primary m-2" onClick={() => setProjectsStatusFilter("Planning")}>Planning</button>
        <button className="btn btn-primary m-2" onClick={() => setProjectsStatusFilter("In Progress")}>In Progress</button>
        <button className="btn btn-primary m-2" onClick={() => setProjectsStatusFilter("Complete")}>Complete</button>
      </div>
      { filteredProjects.map( prjct => <ProjectList project={prjct} /> )}
      
    </div>
  );
}

export default App;
