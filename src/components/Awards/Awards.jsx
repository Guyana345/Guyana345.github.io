import React, { Component } from "react";
import {Container} from 'reactstrap';
import "./Awards.css";

class Awards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { awards } = this.props;
    return (
      <Container>
      <div className="row my-auto">
        <div className="col-12">
          <h2 className="  text-center">Awards</h2>
          <hr className="style-two" />
          <div className="mb-5 heading-border" />
        </div>
        <div className="main-award" id="award-box">
          {awards.map(award => {
            return (
              <div key={award.name} className="award">
                <div className="award-icon" />
                <div className="award-content">
                  <span className="date">{award.title} : {award.date} </span>
                  <h5 className="title">{award.awarder}</h5>
                  <p className="description">{award.summary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </Container >
    );
  }
}

export default Awards;
