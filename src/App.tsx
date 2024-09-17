import React from 'react';
import { Link, Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Resume from './components/Resume/Resume';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';

export function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Resume">Resume</Link></li>
        <li><Link to="/Publications">Publications</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Publications" element={<Publications />} />
            <Route path="/Projects" element={<Outlet />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
