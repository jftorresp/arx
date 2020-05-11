import React from "react";

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
      <header className='home-area overlay' id='home_page'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 hidden-sm col-md-5'>
              <figure
                className='mobile-image wow fadeInUp'
                data-wow-delay='0.2s'
              >
                <img src={headerphone} alt='' />
              </figure>
            </div>
            <div className='col-xs-12 col-md-7'>
              <div className='space-80 hidden-xs' />
              <h1 className='wow fadeInUp' data-wow-delay='0.4s'>
                Arx, Easy Speed Dating
              </h1>
              <div className='space-20' />
              <div className='desc wow fadeInUp' data-wow-delay='0.6s'>
                <p>
                  Be the first to participate on an Speed Dating, comfortable,
                  easy to use and made to get to know your better half.
                </p>
              </div>
              <div className='space-20' />
              <a
                href='http://arx-speeddating-app.herokuapp.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bttn-white wow fadeInUp'
              >
                Start Chatting{" "}
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
