import React, { Component, Fragment } from "react";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col
} from "reactstrap";

import "./skills.css";

class Skills extends Component {
  render() {
    const { skills } = this.props;

    return (
      <div className="container" id="skills">
        <div className="container">
          <div className="">
            <div className="portfolio-section-title text-center">
              <h2>Skills</h2>
              <hr className="style-two" />
            </div>
          </div>
          <Container>
            <Row>
              {skills.map(skill => {
                return (
                  <Col
                    key={skill.name}
                    xs="12"
                    sm="12"
                    lg="4"
                    className="portfolio-card"
                  >
                    <Fragment>
                      <Card>
                        <CardBody>
                          <CardTitle className="text-center">
                            <a href={skill.name} _blank>
                              {skill.title}
                            </a>
                            <hr className="style-twos" />
                          </CardTitle>
                          <CardSubtitle
                            className=""
                            style={{ fontSize: "0.8rem", marginBottom: "10px" }}
                          >
                            {skill.description}
                          </CardSubtitle>
                          <CardText>
                            <div className="">
                              <span
                                className="program-title"
                                style={{ marginBottom: "15px" }}
                              >
                                {skill.skillTitle}:{" "}
                              </span>
                              <div>
                                {skill.skillDetails.map(details => {
                                  return <div>{details}</div>;
                                })}
                              </div>
                            </div>
                          </CardText>
                        </CardBody>
                      </Card>
                    </Fragment>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Skills;
