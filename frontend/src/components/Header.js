import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {


  const [loggedin, setLoggedin] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbarh navbar-expand-md navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgq_jT9BF6lXBNi651RfL0HN-PZK24YStGg&usqp=CAU"
                height={40}
                alt="logo"
                loading="lazy"
              />
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/plugin">
                  Plugin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard">
                Dashboard
                </NavLink>
              </li>
          
            </ul>
            </div>
            {/* Avatar */}
            
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                
              </ul>
            </div>
        
          {/* Right elements */}
      
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>

  )
}

export default Header;