import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="nav-bar">
      <div className="site-name">Portfolio</div>
      <div className="tabbed-links">
        <div className="links">
          <NavLink
            to="/"
            activeClassName={location.pathname === "/" ? "active" : ""}
          >
            HOME
          </NavLink>
        </div>
        <div className="links">
          <NavLink to="/about" style={{ textDecoration: "inherit" }}>
            ABOUT
          </NavLink>
        </div>
        <div className="links">
          <NavLink to="/skills">SKILLS</NavLink>
        </div>
        <div className="links">
          <NavLink to="/works">PROJECTS</NavLink>
        </div>
      </div>
      <div className="social-medias">
        <div>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <div>
          <a href="https:www.instagram.com" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/AnandP201"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/anand-s-pai-687422210"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
