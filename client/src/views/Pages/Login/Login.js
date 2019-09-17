import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth-actions';
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

class Login extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      emptyEmail: false,
      emptyPass: false
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
    event.preventDefault();
    if (this.state.email === '') {
      this.setState({ emptyEmail: true });
    } else if (this.state.password === '') {
      this.setState({ emptyPass: true });
    } else {
      const credentials = {
        email: this.state.email,
        password: this.state.password,
      }

      this.props.login(credentials);
      
      this.setState({
        password: '',
        emptyEmail: false,
        emptyPass: false
      });
    }
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    } else {
      return (
        <div className="app-body align-items-center">
          <Container>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Sign in</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
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
                          invalid={this.state.emptyEmail}
                        />
                        <FormFeedback valid={false}>
                          Please enter an email address
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
                          invalid={this.state.emptyPass}
                        />
                        <FormFeedback valid={false}>
                          Please enter a password
                        </FormFeedback>
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
                        Log in
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
    login_error: state.authStore.login_error
  }
}

export default connect(mapStateToProps, {login})(Login);
