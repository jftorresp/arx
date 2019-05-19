import React from "react";

import "../style.css";
import logo from "../images/logo_Arx_Blanco.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="mainmenu-area" data-spy="affix" data-offset-top="200">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#primary_menu"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link
                className="navbar-brand"
                hclass="collapse navbar-collapse"
                id="primary_menu"
                to="/"
              >
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div>
              <ul className="nav navbar-nav mainmenu">
                <li className="active">
                  <a href="#home_page">Home</a>
                </li>
                <li>
                  <a href="#about_page">Información</a>
                </li>
                <li>
                  <a href="#progress_page">Características</a>
                </li>
                <li>
                  <a href="#features_page">Opiniones</a>
                </li>
                <li>
                  <a href="blog.html">Dev-Blog</a>
                </li>
                <li>
                  <a href="#contact_page">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
