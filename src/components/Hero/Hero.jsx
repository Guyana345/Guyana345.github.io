import React, { Component } from "react";
import "./Hero.css";

class Hero extends Component {
  render() {
    return (
      <div>
        <section className="hero bg-overlay" id="hero" data-bg="img/hero.jpeg">
          <div className="text py-5">
            <p className="lead">Fully responsive HTML5 &amp; CSS3 template</p>
            <h1>
              I'm <span className="bold">stisla</span>, based on{" "}
              <span className="bold">Bootstrap 4</span>.
            </h1>
            <div className="cta">
              <a href="#features" className="btn btn-primary smooth-link">
                Get Started
              </a>
              <div className="link">
                <a href="#">Under the MIT License</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
