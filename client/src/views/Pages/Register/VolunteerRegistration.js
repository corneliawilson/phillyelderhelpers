import React, { Component } from 'react';

import { Button, Card, CardBody } from 'reactstrap';
import Navigation from '../../../components/Navigation';
import CustomStepper from '../../../components/CustomStepper';

class VolunteerRegistration extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const step1 = (<Card>
      <CardBody>
        <h5>Enter group details</h5>
        <p>Names, emails, username, password, description</p>
      </CardBody>
    </Card>);

    const step2 = (<Card>
      <CardBody>
        <h5>Enter preferences</h5>
        <p>Neighborhoods, tasks</p>
      </CardBody>
    </Card>);

    const step3 = (<Card>
      <CardBody>
        <h5>Confirm</h5>
        <p>Sign waiver, etc.</p>
      </CardBody>
    </Card>);

    return (
      <div>
        <p>Volunteer registration page</p>
        <CustomStepper 
          labels={["Group details", "Preferences", "Confirm"]}
          steps={[step1, step2, step3]}
          handleSubmit={() => console.log("submitted")}
        />
        <Navigation />
      </div>
    );
  }
}


export default VolunteerRegistration;
