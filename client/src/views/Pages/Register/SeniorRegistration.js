import React, { Component } from 'react';

import { Button, Card, CardBody } from 'reactstrap';
import Navigation from '../../../components/Navigation'
import CustomStepper from '../../../components/CustomStepper';
import SeniorInformationForm from './SeniorInformationForm';


class SeniorRegistration extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const step1 = (<Card className="border-0">
      <CardBody>
        <div className="text-center">Enter your information</div>
        <div>
          <SeniorInformationForm />
        </div>
      </CardBody>
    </Card>);

    const step2 = (<Card>
      <CardBody>
        <h5>Make a request now?</h5>
        <p>Task type, contact preferences</p>
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
        <div className="centered-header">
          <div className="header-bold">Register</div>
          <div>Create an account</div>
        </div>
        <CustomStepper 
          labels={["Account information", "Make a request?", "Confirm"]}
          steps={[step1, step2, step3]}
          handleSubmit={() => console.log("submitted")}
        />
        <div style={{ marginTop: '10rem' }}>
          <Navigation />
        </div>

      </div>
    );
  }
}


export default SeniorRegistration;
