import React, { Component } from "react";
import { Container } from "reactstrap";
import "./About.css";

class Slider extends Component {
  render() {
    return (
      <Container className="slider-section ">
        <div className="container">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-154db.appspot.com/o/hero.jpg?alt=media&token=a1513872-b5e5-4b3b-8f0d-2ce44425509d" alt="a picture of me | Tafadzwa Makuyana" class="img-fluid" />
        </div>
      </Container>
    );
  }
}

export default Slider;
