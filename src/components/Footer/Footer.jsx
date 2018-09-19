import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
<div id="footer" className="text-center">
    <div className="container">
      <div className="socials-media text-center">

        <ul className="list-unstyled">
          <li><a href="#"><i className="ion-social-facebook"></i></a></li>
          <li><a href="#"><i className="ion-social-twitter"></i></a></li>
          <li><a href="#"><i className="ion-social-instagram"></i></a></li>
          <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
          <li><a href="#"><i className="ion-social-tumblr"></i></a></li>
          <li><a href="#"><i className="ion-social-dribbble"></i></a></li>
        </ul>

      </div>

      <p>&copy; Copyrights tmakuyana. All rights reserved.</p>

      <div className="credits">
        Designed by <a href="/">tmakuyana.me</a>
      </div>

    </div>
  </div>
    )
  }
};

export default Footer;
