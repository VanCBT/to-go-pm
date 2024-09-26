import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [projectsStatusFilter, setProjectsStatusFilter] = useState("All");

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
        setProjects(storedProjects);
    }, []);

    const filteredProjects = projectsStatusFilter === "All"
        ? projects
        : projects.filter(project => project.status === projectsStatusFilter);

    return (
        <div>
            <h1>Projects</h1>
            <Link to="/add">Add New Project</Link>

        
        <div>
            <button className="btn btn-primary ms-4 me-2" onClick={() => setProjectsStatusFilter("All")}>All</button>
            <button className="btn btn-primary m-2" onClick={() => setProjectsStatusFilter("Not Started")}>Not Started</button>
            <button className="btn btn-primary m-2" onClick={() => setProjectsStatusFilter("Planning")}>Planning</button>
            <button className="btn btn-primary m-2" onClick={() => setProjectsStatusFilter("In Progress")}>In Progress</button>
            <button className="btn btn-primary m-2" onClick={() => setProjectsStatusFilter("Complete")}>Complete</button>
        </div>

        <ul>
            {filteredProjects.map(project => (
                <li key={project.id}>
                    <Link to={`/projects/${project.id}`}>{project.name}</Link>
                    <span> - {project.status}</span>
                </li>
            ))}
        </ul>
    </div>
    );
}

export default ProjectList;