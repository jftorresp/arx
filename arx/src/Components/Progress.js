import React from "react";

import "../style.css";
import fondo from "./images/Progress_Arx.png";

class Progress extends React.Component {
  render() {
    return (
      <section class='feature-area section-padding-top' id='features_page'>
        <div class='container'>
          <div class='row'>
            <div class='col-xs-12 col-sm-8 col-sm-offset-2'>
              <div class='page-title text-center'>
                <h5 class='title'>Características</h5>
                <div class='space-10' />
                <h3>Increíbles y Únicas Caracterísiticas</h3>
                <div class='space-60' />
              </div>
            </div>
          </div>
          <div class='row'>
            <div class='col-xs-12 col-sm-6 col-md-4'>
              <div class='service-box wow fadeInUp' data-wow-delay='0.2s'>
                <div class='box-icon'>
                  <i class='lnr lnr-rocket' />
                </div>
                <h4>Fast &amp; Powerful</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div class='space-60' />
              <div class='service-box wow fadeInUp' data-wow-delay='0.4s'>
                <div class='box-icon'>
                  <i class='lnr lnr-paperclip' />
                </div>
                <h4>Easily Editable</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div class='space-60' />
              <div class='service-box wow fadeInUp' data-wow-delay='0.6s'>
                <div class='box-icon'>
                  <i class='lnr lnr-cloud-download' />
                </div>
                <h4>Cloud Storage</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div class='space-60' />
            </div>
            <div class='hidden-xs hidden-sm col-md-4'>
              <figure class='mobile-image'>
                <img src={fondo} alt='Feature Photo' />
              </figure>
            </div>
            <div class='col-xs-12 col-sm-6 col-md-4'>
              <div class='service-box wow fadeInUp' data-wow-delay='0.2s'>
                <div class='box-icon'>
                  <i class='lnr lnr-clock' />
                </div>
                <h4>Easy Notifications</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div class='space-60' />
              <div class='service-box wow fadeInUp' data-wow-delay='0.4s'>
                <div class='box-icon'>
                  <i class='lnr lnr-laptop-phone' />
                </div>
                <h4>Completamente Responsive</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div class='space-60' />
              <div class='service-box wow fadeInUp' data-wow-delay='0.6s'>
                <div class='box-icon'>
                  <i class='lnr lnr-cog' />
                </div>
                <h4>Editable Layout</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div class='space-60' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Progress;
