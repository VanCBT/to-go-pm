import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ProjectForm() {
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [status, setStatus] = useState('Not Started');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = { id: uuidv4(), name, client, status, description };
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    localStorage.setItem('projects', JSON.stringify([...projects, newProject]));
    navigate.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Project</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Client:</label>
        <input type='text' value={client} onChange={(e) => setClient(e.target.value)} required />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Not Started">Not Started</option>
          <option value="Planning">Planning</option>
          <option value="In Progress">In Progress</option>
          <option value="Complete">Complete</option>
        </select>
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
