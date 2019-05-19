import React from "react";

import "../style.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-5">
                <span>
                  Copyright &copy;
                  2019
                  Todos los derechos reservados <br>
                  </br>Totocho Apps
                  <a href="#" target="_blank">
                  </a>
                </span>
                <div class="space-30 hidden visible-xs" />
              </div>
              <div class="col-xs-12 col-md-7">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Acerca de</a>
                    </li>
                    <li>
                      <a href="#">Características</a>
                    </li>
                    <li>
                      <a href="#">Opiniones</a>
                    </li>
                    <li>
                      <a href="#">Contacto</a>
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
