import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../actions/auth-actions';
import { Redirect } from 'react-router-dom';

import {
  Container,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  FormFeedback
} from 'reactstrap';

class Register extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      city: 'Philadelphia',
      state: 'Pennsylvania',
      zip: '',
      about: '',
      errors: []
    };
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("In submit");
    event.preventDefault();

    if (this.validate() === true) {
      const credentials = {
        email: this.state.email,
        name: this.state.name,
        phone: this.state.phone,
        password: this.state.password,
        address: this.state.address,
        zip: this.state.zip,
        city: this.state.city,
        state: this.state.state,
      }

      this.props.register(credentials);
    }
  }

  validate() {
    let new_errors = [];
    if (this.state.password === '') {
      new_errors.push("password");
    }
    if (this.state.name === '') {
      new_errors.push("name");
    }
    if (this.state.address === '') {
      new_errors.push("address");
    }
    if (this.state.phone === '') {
      new_errors.push("phone");
    }
    if (this.state.email === '') {
      new_errors.push("email");
    }

    this.setState({
      errors: new_errors
    });
    console.log("Validated: ", new_errors);
    return new_errors.length === 0;
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    } else if (this.props.fetching_login || this.props.fetching_register) {
      return <div className="app">Loading...</div>;
    } else {
      return (
        <div className="app-body align-items-center">
          <Container>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Register</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          placeholder="Name"
                          name="name"
                          type="text"
                          value={this.state.name}
                          onChange={this.handleChange}
                          invalid={this.state.errors.includes("name")}
                        />
                        <FormFeedback valid={false}>
                          Name is required
                        </FormFeedback>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Email address</label>
                        <Input 
                          placeholder="Email" 
                          type="email" 
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          invalid={this.state.errors.includes("email")}
                        />
                        <FormFeedback valid={false}>
                          Email address is required
                        </FormFeedback>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Password</label>
                        <Input 
                          placeholder="Password" 
                          type="password" 
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          invalid={this.state.errors.includes("password")}
                        />
                        <FormFeedback valid={false}>
                          Password is required
                        </FormFeedback>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Phone number</label>
                        <Input 
                          placeholder="Phone number" 
                          name="phone"
                          value={this.state.phone}
                          onChange={this.handleChange}
                          invalid={this.state.errors.includes("phone")}
                        />
                        <FormFeedback valid={false}>
                          Phone number is required
                        </FormFeedback>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          placeholder="Home Address"
                          type="text"
                          name="address"
                          value={this.state.address}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          placeholder="City"
                          type="text"
                          name="city"
                          value={this.state.city}
                          onChange={this.handleChange}
                          invalid={this.state.errors.includes("address")}
                        />
                        <FormFeedback valid={false}>
                          Address is required
                        </FormFeedback>
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>State</label>
                        <Input
                          placeholder="State"
                          type="text"
                          name="state"
                          value={this.state.state}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input 
                          placeholder="ZIP Code" 
                          type="number" 
                          name="zip"
                          value={this.state.zip}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          type="textarea"
                          name="about"
                          value={this.state.about}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        onClick={this.handleSubmit}
                      >
                        Register
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Container>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authStore.isAuthenticated,
    fetching_login: state.authStore.fetching_login,
    fetching_register: state.authStore.fetching_register,
    registration_error: state.authStore.registration_error,
  }
}

export default connect(mapStateToProps, {register})(Register);
