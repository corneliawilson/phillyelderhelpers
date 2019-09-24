import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

import { 
  Container, 
  Row, 
  Col,
  Button
} from 'reactstrap';

import Navigation from '../../../components/Navigation';
import img1 from '../../../assets/imgs/neighborhood.jpg';
import ImageSection from './ImageSection';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }



  render() {
    const text1 = (
      <div className="section-text">
        <Row>
          <h4>Philly Elder Helpers</h4>
        </Row>
        <Row>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Row>
        <Row className="justify-content-md-center btn-row">
          <Col className="text-right m-3">
            <Link to='/senior'>
              <Button>
                Seniors
              </Button>
            </Link>
          </Col>
          <Col className="m-3">
            <Link to='/volunteer'>
              <Button>
                Volunteers
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    );

      return (
        <div>
          <ImageSection 
            image={img1} 
            alt_text="neighborhood" 
            text={text1}
          />
          <Navigation />
          
        </div>
      );
    }
  //}
}

export default Home;
