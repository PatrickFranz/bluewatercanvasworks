import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'gatsby';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  render() {
    const { openMenu } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <a
            className="navbar-brand text-uppercase text-expanded d-lg-none"
            href="/#"
          >
            {config.siteTitle}
          </a>

          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler  ${openMenu ? '' : 'collapsed'}`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-center mx-auto">
              <li className={`nav-item px-lg-4`}>
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/"
                  activeClassName="active"
                >
                  Home
                </Link>
              </li>
              <li className={`nav-item px-lg-4`}>
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/about"
                  activeClassName="active"
                >
                  About
                </Link>
              </li>
              <li className={`nav-item px-lg-4`}>
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/projects"
                  activeClassName="active"
                >
                  Projects
                </Link>
              </li>
              <li className={`nav-item px-lg-4`}>
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/contact"
                  activeClassName="active"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
