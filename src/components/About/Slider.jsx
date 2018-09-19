import React, { Component } from "react";
import { Container } from "reactstrap";
import "./About.css";

class Slider extends Component {
  render() {
    return (
      <Container className="slider-section ">
        <div className="container">
          <img src="https://picsum.photos/400" alt="..." class="img-fluid" />
        </div>
      </Container>
    );
  }
}

export default Slider;
