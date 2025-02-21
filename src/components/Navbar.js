// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll'; // for smooth scroll effect

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
