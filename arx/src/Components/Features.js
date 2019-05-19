import React from "react";

import "../style.css";
import phone from "./images/Progress_Arx.png";

class Features extends React.Component {
  render() {
    return (
      <section className="progress-area gray-bg" id="progress_page">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="page-title section-padding">
                <h5 className="title wow fadeInUp" data-wow-delay="0.2s">
                  POR QUÉ ARX
                </h5>
                <div className="space-10" />
                <h3 className="dark-color wow fadeInUp" data-wow-delay="0.4s">
                  La mejor App del momento
                </h3>
                <div className="space-20" />
                <div className="desc wow fadeInUp" data-wow-delay="0.6s">
                  <p>
                    Arx cuenta con innumerables salas de chat para conocer a personas de todas las partes del mundo,
                    y quien sabe puede que una de seas se convierta en el amor de tu vida.
                  </p>
                </div>
                <div className="space-50" />
                <a
                  href="/"
                  className="bttn-default wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  Conoce más
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <figure className="mobile-image">
                <img src={phone} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
