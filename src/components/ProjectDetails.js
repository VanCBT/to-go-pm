import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ProjectDetails() {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject);
  }, [id]);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    const updatedProject = { ...project, status: newStatus };
    setProject(updatedProject);

    // Update the project in localStorage
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const updatedProjects = projects.map(p => p.id === id ? updatedProject : p);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const handleDelete = () => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const updatedProjects = projects.filter(p => p.id !== id);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    navigate('/projects');
  };

  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <h2>{project.name}</h2>
      <p>Client: {project.client}</p>
      <div>
        <label htmlFor="status">Status: </label>
        <select 
            id="status" 
            value={project.status} 
            onChange={handleStatusChange}
            className="form-select"
         >
            <option value="Not Started">Not Started</option>
            <option value="Planning">Planning</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
        </select>
        </div>
        <div>
            <p>Description: {project.description}</p>
        </div>
      <button onClick={handleDelete} className="btn btn-danger mt-3">Delete Project</button>
      <br />
      <Link to="/projects" className="btn btn-primary mt-3">Back to Projects</Link>
    </div>
  );
}

export default ProjectDetails;
