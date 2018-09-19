import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  NavLink,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Hero from "./Hero";

const AVATAR =
  "https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg";

class Heading extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <header>
          <Hero data={data}/>
        </header>
        <Navbar
          fixed="top"
          color="light"
          light
          expand="xs"
          className="border-bottom border-gray bg-white"
          style={{ height: 80 }}
        >
          <Container>
            <Row
              noGutters
              className="position-relative w-100 align-items-center"
            >
              <Col className="d-none d-lg-flex justify-content-start">
                <Nav className="mrx-auto" navbar>
                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/">
                      <img
                        src={AVATAR}
                        alt="avatar"
                        className="img-fluid rounded-circle"
                        style={{ width: 36 }}
                      />
                    </NavLink>
                  </NavItem>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="#about">
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="#skills">
                      Skills
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="#portfolio">
                      Portfolio
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="#contact">
                      Contact
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>

              
              <Col className="s-none d-lg-flex justify-content-end">
                <Button
                  type="submit"
                  color="info"
                  outline
                  onClick={this.toggle}
                >
                  Get In Touch
                </Button>

                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggle}>Contact Details</ModalHeader>
                  <ModalBody>
                    <p> You can reach me at: </p>
                    <p>
                      <i class="far fa-envelope" /> tafadzwa345@hotmail.com
                    </p>
                    <p>
                      <i class="fas fa-phone" /> +66(0)9723-80270
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Heading;
