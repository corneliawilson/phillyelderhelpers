import React, { Component, Fragment } from 'react';

import {

} from 'reactstrap';

class Name extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {

    }
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
  	return (
  	  <Fragment>

  	  </Fragment>
  	);
	}
}

export default Name;


