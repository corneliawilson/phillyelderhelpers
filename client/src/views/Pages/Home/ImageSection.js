import React, { Component } from 'react';

import './home.css';

import { 
  Container, 
  Row, 
  Col
} from 'reactstrap';


class ImageSection extends Component {


  render() {
      return (
        <div className="img-section">
          <Row>
            <Col className="img-col">
              <img src={this.props.image} alt={this.props.alt_text} className="half-img"/>
            </Col>
            <Col sm="5">
              {this.props.text}
            </Col>
            </Row>
          </div>
      );
    }
}

export default ImageSection;
