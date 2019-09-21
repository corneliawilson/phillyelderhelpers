import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Navigation from '../../../components/Navigation';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    // if (this.props.isAuthenticated) {
    //   return <Redirect to="/user/" />
    // } else {
      return (
        <div className="app">
        <Navigation />
          Home page
          <div>
            <ul>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  //}
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authStore.isAuthenticated,
  }
}

export default connect(mapStateToProps, {})(Home);
