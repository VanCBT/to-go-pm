import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import ProjectDetails from './components/ProjectDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>To-Go Project Management</h1>
        <h2>Work management for busy professionals</h2>
        <Routes>
            <Route exact path="/" component={ProjectList} />
            <Route path="/add" component={ProjectForm} />
            <Route path="/project/:id" Component={ProjectDetails} />
          </Routes>
      </div>
      </Router>
  )
}

export default App;
