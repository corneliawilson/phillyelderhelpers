/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className="footer"
      >
        <Container fluid>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="https://codeforphilly.org/" target="_blank">
                    Code for Philly
                  </a>
                </li>
                <li>
                  <a href="https://codeforphilly.org/projects/philly_elder_helpers" target="_blank">
                    Project page
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <div className="copyright">
                &copy; {1900 + new Date().getYear()}
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
