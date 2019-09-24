import React, { Component } from 'react';

import { Button } from 'reactstrap';

class Buttons extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Button color="primary">{this.props.button1}</Button>{' '}
        <Button color="secondary">Cancel</Button>
      </div>
    );
  }
}


export default Buttons;
