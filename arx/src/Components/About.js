import React from "react";

import "../style.css";
import logoAbout from "../images/Logo_70.png";

class About extends React.Component {
  render() {
    return (
      <section className='section-padding' id='about_page'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-10 col-md-offset-1'>
              <div className='page-title text-center'>
                <img src={logoAbout} alt='About Logo' />
                <div className='space-20' />
                <h5 className='title'>About Arx</h5>
                <div className='space-30' />
                <h3 className='purple-color'>
                  An App for those who want to interact with new people, hang
                  out and have a different dating experience.
                </h3>
                <div className='space-20' />
                <p>
                  You will be paired to a chat where for 5 minutes with someoine
                  that matches your tastes and preferences. After the time ends
                  you can decide if you want to have a more personal interaction
                  with the other person or not. If both parts liked the
                  conversation the would match and redirect to a permament
                  screen to chat. Thats a big opportunity to find your better
                  half.
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
