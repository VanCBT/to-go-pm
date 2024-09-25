import ProjectList from "./components/ProjectList";

// fake test data //

const projectsList = [
  {
    id: 0,
    name: "Dunes West Website",
    client: "Dunes West HOA",
    status: "In Progress"
  },
  {
    id: 1,
    name: "Reactor Night Club Branding",
    client: "Maddie Entertainment",
    status: "Not Started"
  },
  {
    id: 2,
    name: "Tween Social Club Advertising Campaign",
    client: "Town of MountP",
    status: "Planning"
  },
  {
    id: 3,
    name: "VanReal Mobile App",
    client: "Pilyr",
    status: "Complete"
  },
]

function App() {
  return (
    <div>
      <h1>Projects</h1>
      { projectsList.map( pjct => <ProjectList project={pjct} /> )}
      
    </div>
  );
}

export default App;
