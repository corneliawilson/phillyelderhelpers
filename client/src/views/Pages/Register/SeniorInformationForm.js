import React, { Component } from 'react';

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

import AddressField from '../../../components/AddressField';

// PROPS
// - handleSubmit()
class SeniorInformationForm extends Component {

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
      apartment: '',
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
        apartment: this.state.apartment
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
    return (
      <div className="app-body align-items-center">
        <Container>
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
                  <AddressField 
                    address={this.state.address} 
                    setAddress={(addr) => this.setState({ address: addr}) }
                  />
                  <FormFeedback valid={false}>
                    Address is required
                  </FormFeedback>
                </FormGroup>

              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <label>Apartment (optional)</label>
                  <Input 
                    placeholder="Apartment" 
                    name="apartment"
                    value={this.state.apartment}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default SeniorInformationForm;
