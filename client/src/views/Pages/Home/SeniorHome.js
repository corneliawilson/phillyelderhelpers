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

class SeniorHome extends Component {

  render() {

      return (
        <div>
        <p>Senior home</p>
          <Navigation />
          
        </div>
      );
    }
  //}
}

export default SeniorHome;
