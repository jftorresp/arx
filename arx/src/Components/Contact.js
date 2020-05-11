import React from "react";

import "../style.css";

class Contact extends React.Component {
  render() {
    return (
      <div className='section-padding' id='contact_page'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='page-title text-center'>
                <h5 className='title'>Contact Us</h5>
                <h3 className='dark-color'>Find us</h3>
                <div className='space-60' />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-4'>
              <div className='footer-box'>
                <div className='box-icon'>
                  <span className='lnr lnr-map-marker' />
                </div>
                <p>
                  Calle 160 #73-47, Bogotá, Colombia
                  <br />
                </p>
              </div>
              <div className='space-30 hidden visible-xs' />
            </div>
            <div className='col-xs-12 col-sm-4'>
              <div className='footer-box'>
                <div className='box-icon'>
                  <span className='lnr lnr-phone-handset' />
                </div>
                <p>
                  +57 350 508 4880 <br />
                  +57 321 345 7213
                </p>
              </div>
              <div className='space-30 hidden visible-xs' />
            </div>
            <div className='col-xs-12 col-sm-4'>
              <div className='footer-box'>
                <div className='box-icon'>
                  <span className='lnr lnr-envelope' />
                </div>
                <p>
                  contactoarxapp@gmail.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
