import React from "react";

import "../style.css";
import phone from "./images/Progress_Arx.png";

class Features extends React.Component {
  render() {
    return (
      <section className='progress-area gray-bg' id='progress_page'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              <div className='page-title section-padding'>
                <h5 className='title wow fadeInUp' data-wow-delay='0.2s'>
                  WHY ARX?{" "}
                </h5>
                <div className='space-10' />
                <h3 className='dark-color wow fadeInUp' data-wow-delay='0.4s'>
                  The Best App of the moment{" "}
                </h3>
                <div className='space-20' />
                <div className='desc wow fadeInUp' data-wow-delay='0.6s'>
                  <p>
                    Arx loads an input for you to connect to anyone with
                    matching preferences. You will have around 5 minutes to talk
                    with someone, if you like it you would get a permament chat,
                    and maybe your better half.
                  </p>
                </div>
                <div className='space-50' />
              </div>
            </div>
            <div className='col-xs-12 col-md-6'>
              <figure className='mobile-image'>
                <img src={phone} alt='' />
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
