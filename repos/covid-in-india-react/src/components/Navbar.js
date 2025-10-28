import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { Link, NavLink, withRouter } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">React</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/covid">Covid</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(NavBar);

