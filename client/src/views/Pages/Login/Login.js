import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth-actions';
import { Redirect } from 'react-router-dom';

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
        <div className="app">
          <div className="app-body flex-row align-items-center">
          Login page
          </div>
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
