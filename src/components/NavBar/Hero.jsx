import React, { Component } from "react";
import "./Hero.css";

class Heading extends Component {
  render() {
    const { data } = this.props;
    return (
      <div id="header" className="home">
        <section id="home" data-stellar-background-ratio="0.5">
          <div class="overlay" />
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="home-info">
                  <h2>Hi</h2>
                  <h3>I'm {data.nick},</h3>
                  <p className="small">{data.label}</p>
                  <a href="#contact" className="btn section-btn smoothScroll">
                    Get In Touch
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Heading;
