import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import ProjectDetails from './components/ProjectDetails';
import Login from './components/Login';
//import { Navigate } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(null);
  const [isFirstLogin, setIsFirstLogin] = useState(false); // this is a returning user
  console.log('returning user');

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }, []);

    // if they are a new user, store the user in local storeage and direct them to set up first project
    const handleLogin = (email) => {
      const newUser = { email };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));

      const projects = JSON.parse(localStorage.getItem('projects')) || [];
      if (projects.length === 0) {
        setIsFirstLogin(true);
        console.log('new user');
      }
    };

   // const handleLogout = () => {
   //   setUser(null);
   //   localStorage.removeItem('user');
   // };


  return (
    <Router>
      <div className="App">
        <h1>To-Go Project Management</h1>
        <h2>Work management for people on the move</h2>
        {/*user && <button onClick={handleLogout}>Logout</button>*/}
        <Routes>
          <Route path="/login" element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/projects" />} />
          <Route 
            path="/projects" 
            element={
              user ? (
                isFirstLogin ? (
                  <div>
                    <h3>Welcome! Are you ready To-Go?</h3>
                    <button onClick={() => setIsFirstLogin(false)}>Add my first project</button>
                  </div>
                ) : (
                  <ProjectList />
                )
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
          <Route path="/add" element={user ? <ProjectForm /> : <Navigate to="/login" />} />
          <Route path="/project/:id" element={user ? <ProjectDetails /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to={user ? "/projects" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
