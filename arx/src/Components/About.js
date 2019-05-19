import React from "react";

import "../style.css";
import logoAbout from "../images/Logo_70.png";

class About extends React.Component {
  render() {
    return (
      <section className="section-padding" id="about_page">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 col-md-offset-1">
              <div className="page-title text-center">
                <img src={logoAbout} alt="About Logo" />
                <div className="space-20" />
                <h5 className="title">Acerca de Arx</h5>
                <div className="space-30" />
                <h3 className="purple-color">
                  Un App para aquellos que desean interactuar con gente nueva,
                  pasar el rato y tener una experiencia de Dating diferente.
                </h3>
                <div className="space-20" />
                <p>
                  Existirán salas en las que las personas se conocerán durante 1
                  minuto. Después del minuto podrás decidir si quieres tener una
                  interacción más personal o no con la otra persona. Cuando
                  hayas hablado con cada una de las personas de la sala,es decir
                  que se acabó la rotación en el grupo, si ambos quieren tener
                  una mayor interacción, podrán conversar dentro del app por un
                  tiempo total de 30 minutos. Despues de esto se borrará el
                  contacto con la otra persona.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
