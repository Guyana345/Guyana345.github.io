import React, { Component } from "react";
import { Container, Row, Col, Button, Jumbotron } from "reactstrap";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div id="contact" className="paddsection">
        <Container>
          <Row>
            <Col md="12" className="contact-info">
              <div className="contact-contact text-center">
                <h2 className="mb-30">GET IN TOUCH</h2>

                <ul className="contact-details">
                  <li>
                    <span>{data.basics.city}</span>
                  </li>
                  <li>
                    <span>{data.basics.number}</span>
                  </li>
                  <li>
                    <span>{data.basics.email}</span>
                  </li>
                </ul>
              </div>
              <div className="social">
              {
                data.basics.profiles.map((profile) => {
                  return (
                    <span>
                    <a href={profile.link} className={profile.name}><i className={profile.class} /></a>
                  </span>
                  );
                })
              }
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
