import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <span className="logo-icon">💡</span>
          <h1>IdeaBoard</h1>
        </div>
        <div className="nav-links">
          <a href="#ideas">Ideas</a>
          <a href="#add-idea">Share Idea</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;