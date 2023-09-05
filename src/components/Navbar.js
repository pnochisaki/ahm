import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-items">
        <Link to="/services">
          Services
        </Link>
        <Link to="/contact">
          Contact
        </Link>
        <Link to="/testimonials">
          Testimonials
        </Link>
        <Link to="/about">
          About
        </Link>
      </div>
      <div className="branding">
        <Link to="/" className="logo">
          <figure className="image">
            <img src={logo} alt="ahm" />
          </figure>
        </Link>
      </div>      
    </div>
  </nav>
)

export default Navbar
