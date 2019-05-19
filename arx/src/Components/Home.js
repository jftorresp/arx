import React from "react";
import { Link } from "react-router-dom";

import "../style.css";
import headerphone from "./images/Inicio_Arx.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log("1.Constructor");
  }

  componentDidMount() {
    console.log("3.ComponentDidMount");
  }

  componentWillUnmount() {}

  render() {
    console.log("2.Render");
    return (
      <header className="home-area overlay" id="home_page">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 hidden-sm col-md-5">
              <figure
                className="mobile-image wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <img src={headerphone} alt="" />
              </figure>
            </div>
            <div className="col-xs-12 col-md-7">
              <div className="space-80 hidden-xs" />
              <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                Speed Dating Fácil
              </h1>
              <div className="space-20" />
              <div className="desc wow fadeInUp" data-wow-delay="0.6s">
                <p>
                  Se el primero en participar en un app de Speed Dating, comoda,
                  sin complicaciones y hecha para conocer gente de manera fácil.
                </p>
              </div>
              <div className="space-20" />

              <Link
                to="/First/Second"
                className="bttn-white wow fadeInUp"
                data-wow-delay="0.8s"
              >
                Obtener más Información
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
