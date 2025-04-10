import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About IdeaBoard</h3>
          <p>A place to share and discover amazing ideas from creative minds.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#ideas">Browse Ideas</a></li>
            <li><a href="#add-idea">Share Your Idea</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="https://x.com/NirajShevade31" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-link">Twitter</a>
            <a href="https://github.com/nirajshevade" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/niraj-shevade-3113b8290/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} IdeaBoard. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;