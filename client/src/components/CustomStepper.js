import React, { Component } from 'react';

import { Button, Container, Row, Col } from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

// PROPS
// - labels
// - steps (step content)
// - handleSubmit
class CustomStepper extends Component {

  constructor(props) {
    super(props);

    this.handleStep = this.handleStep.bind(this);

    this.state = {
      activeStep: 0
    };
  }

  handleStep(next) {
    if (next && this.state.activeStep === this.props.steps.length - 1) {
      this.props.handleSubmit();
      return;
    }

    const newStep = next ? this.state.activeStep + 1 : this.state.activeStep - 1;
    this.setState({
      activeStep: newStep
    });
  }

  handleReset() {
    this.setState({
      activeStep: 0
    })
  }

  render() {
    return (
      <div >
        <Container>
          <Row>
            <Col>
              <Stepper activeStep={this.state.activeStep} >
                {this.props.labels.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Col>
          </Row>
          <Row>
            <Col>{this.props.steps[this.state.activeStep]}</Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button
                disabled={this.state.activeStep === 0}
                onClick={() => this.handleStep(false)}
                className="m-3"
              >
                Back
              </Button>
              <Button 
                onClick={() => this.handleStep(true)}
                className="m-3"
              >
                {this.state.activeStep === this.props.steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default CustomStepper;
