import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../actions/auth-actions';

import { Button } from 'reactstrap';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/" />
    } else {
      return (
        <div className="app">
          You're logged in!
          <Button
            className="btn-round"
            color="primary"
            onClick={() => this.props.logout()}
          >
            Log out
          </Button>
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

export default connect(mapStateToProps, {logout})(Dashboard);
