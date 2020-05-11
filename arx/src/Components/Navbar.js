import React from "react";

import "../style.css";
import logo from "../images/logo_Arx_Blanco.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className='mainmenu-area' data-spy='affix'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <a className='navbar-brand' href='/' id='primary_menu'>
                <img src={logo} alt='Logo' />
              </a>
            </div>
            <div className='nav-options'>
              <ul className='nav navbar-nav mainmenu'>
                <li className='active'>
                  <a href='#home_page'>Home</a>
                </li>
                <li>
                  <a href='#about_page'>About</a>
                </li>
                <li>
                  <a href='#contact_page'>Contact</a>
                </li>
                <li>
                  <a
                    href='https://www.facebook.com/ArxColombia'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/arxapp/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-instagram'></i>
                  </a>{" "}
                </li>
                <li>
                  <a
                    href='https://twitter.com/Arx_App'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-twitter'></i>
                  </a>{" "}
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
