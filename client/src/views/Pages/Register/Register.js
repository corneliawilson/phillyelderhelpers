import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../actions/auth-actions';
import { Redirect } from 'react-router-dom';

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    } else if (this.props.fetching_login || this.props.fetching_register) {
      return <div className="app">Loading...</div>;
    } else {
      return (
        <div className="app">
          <div className="app-body flex-row align-items-center">
            Registration page
          </div>
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
