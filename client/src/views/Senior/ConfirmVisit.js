import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { Card, CardBody, Button } from 'reactstrap';
import Navigation from '../../components/Navigation';


class ConfirmVisit extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="app">
        Senior confirm visit
        <Navigation />   


      </div>
    );
  }
}

export default ConfirmVisit;
