import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProjectDetails() {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject);
  }, [id]);

  if (!project) return <div>Project not found</div>;

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.client}</p>
      <p>Status: {project.status}</p>
      <p>{project.description}</p>
      <Link to="/">Back to Projects</Link>
    </div>
  );
}

export default ProjectDetails;
