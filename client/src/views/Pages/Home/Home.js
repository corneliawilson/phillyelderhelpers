import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { loadModules } from '@esri/react-arcgis';

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

  render() {
    const text1 = (
      <div className="section-text">
        <Row>
          <h3><b>Philly Elder Helpers</b></h3>
        </Row>
        <Row>
          <p><h5>
            <br/>
			<b>What we do:  </b>
			Philly Elder Helpers matches up Philadelphia senior citizens who need assistance with yardwork or basic home maintenance with volunteer groups who can help!
			<br/>
			<br/>
			<b>Why we do this:  </b>
			The need to perform simple home repair may present a challenge for seniors. This project aims to help Philadelphia seniors age in place, by connecting them with volunteers who can help with yardwork and basic home maintenance.
			<br/>
			<br/>
			<b><i>Senior citizens who live in Philadelphia can sign up for this free service.</i></b>
			<br/>
			<br/>
			Volunteer groups in the Philadelphia area can sign up to volunteer.
          </h5></p>
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
          <Widget />
          <Navigation />
          
        </div>
      );
    }
  //}
}

export default Home;
