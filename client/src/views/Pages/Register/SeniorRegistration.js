import React, { Component } from 'react';

import { Button } from 'reactstrap';
import Buttons from '../Register/Buttons';
import Navigation from '../../../components/Navigation'

class SeniorRegistration extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Navigation />
        <Buttons button1="Seniors"/>
      </div>
    );
  }
}


export default SeniorRegistration;
