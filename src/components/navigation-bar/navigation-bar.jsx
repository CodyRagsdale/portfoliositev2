import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navigation-bar.scss';
import logoPath from '../../assets/images/namelogoSMOL.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHomeAlt,
  faEnvelopeOpen,
  faUserAlt,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-bar">
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Link to="/">
        <img src={logoPath} alt="Logo" className="nav-logo" />
      </Link>

      <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <NavLink exact activeClassName="active" to="/">
          <div className="icon-container">
            <FontAwesomeIcon icon={faHomeAlt} />
            <span className="hover-text animate__animated animate__fadeInRight">
              Home
            </span>
          </div>
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="about-me-link"
          to="/aboutme"
        >
          <div className="icon-container">
            <FontAwesomeIcon icon={faUserAlt} />
            <span className="hover-text animate__animated animate__fadeInRight">
              About Me
            </span>
          </div>
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="contact-link"
          to="/contact"
        >
          <div className="icon-container">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            <span className="hover-text animate__animated animate__fadeInRight">
              Contact
            </span>
          </div>
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="projects-link"
          to="/projects"
        >
          <div className="icon-container">
            <FontAwesomeIcon icon={faFolderOpen} />
            <span className="hover-text animate__animated animate__fadeInRight">
              Projects
            </span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavigationBar;
