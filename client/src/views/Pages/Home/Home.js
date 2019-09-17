import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    } else {
      return (
        <div className="app">
          <div className="app-body flex-row align-items-center">
          Home page
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authStore.isAuthenticated,
  }
}

export default connect(mapStateToProps, {})(Home);
