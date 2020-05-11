import React from "react";

import "../style.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class='footer-bottom'>
          <div class='container'>
            <div class='row'>
              <div class='col-xs-12 col-md-5'>
                <span>
                  <a href='/'>
                    Copyright &copy; 2020 All rights reserved <br></br>{" "}
                  </a>
                </span>
                <div class='space-30 hidden visible-xs' />
              </div>
              <div class='col-xs-12 col-md-7'>
                <div class='footer-menu'>
                  <ul>
                    <li>
                      <a href='/#about_page'>About</a>
                    </li>
                    <li>
                      <a href='/#features_page'>Features</a>
                    </li>
                    <li>
                      <a href='/#contact_page'>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
