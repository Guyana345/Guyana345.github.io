import React, { Component } from "react";
import "./About.css";
import { Row, Col, Container, Progress } from "reactstrap";
import Slider from "./Slider";

class About extends Component {
  render() {
    const { data } = this.props;
    return (
      <Container id="about" classNameName="about-us">
        {/* <Row>
          <Col md="6" xs="12">
            <div classNameName="about-info">
              <div classNameName="section-title text-center">
                <h2>About Me</h2>
                <hr classNameName="style-two"/>
              </div>
              <div>
                <h4 classNameName="">Career Objective</h4>
                <p>{data.basics.summary}</p>
              </div>
              <div>
                <h4 classNameName="">Mission State</h4>
                <p>{data.basics.mission}</p>
              </div>
            </div>
          </Col>
          <Col md="6" xs="12">
            <div classNameName="about-info-slider">
              <Slider />
            </div>
          </Col>
        </Row> */}

        <section id="about" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row">
              <Row>
                <Col md="6">
                  <div className="about-info">
                    <div className="section-title">
                      <h2>About Me</h2>
                      <span className="line-bar">...</span>
                    </div>
                    <div>
                      <h4 classNameName="">Career Objective</h4>
                      <p>{data.basics.summary}</p>
                    </div>
                    <div>
                      <h4 classNameName="">Mission Statement</h4>
                      <p>{data.basics.mission}</p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div classNameName="about-info-slider">
                    <Slider />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default About;
