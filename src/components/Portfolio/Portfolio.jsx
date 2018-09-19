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
import "./Portfolio.css";

const BANNER = "https://i.imgur.com/CaKdFMq.jpg";


class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const {projects} = this.props;

    return (
        <section id="blog">
          <div className="container">
            <div className="">
              <div className="portfolio-section-title text-center">
                <h2>Projects</h2>
                <hr className="style-two"/>
              </div>
            </div>

            <Row>
              {projects.map((project) => {
                return (
                  <Col key={project.name}  xs="12" sm="6" lg="4" className="portfolio-card">
                  <Fragment>
                    <Card>
                      <CardImg top width="100%" src={project.photoURL} alt="banner" />
                      <CardBody>
                        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
                        <a href={project.website} _blank>{project.name}</a>
                        </CardTitle>
                        <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: "0.8rem" }} >
                          {project.category}
                        </CardSubtitle>
                        
                        <CardText
                          className="text-secondary mb-4"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {project.summary}
                        </CardText>
                        <CardText> {project.tech}</CardText>
                      
                      </CardBody>
                    </Card>
                  </Fragment>
                </Col>
                );
                
              })}

            </Row>
          </div>
        </section>
    );
  }
}

export default Portfolio;
