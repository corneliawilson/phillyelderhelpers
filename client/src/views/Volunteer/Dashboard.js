import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../actions/auth-actions';

import { Card, CardBody, Button } from 'reactstrap';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="app">
        This is a dahsboard
        <Card>
          <CardBody>
            You're logged in!
            <Button
              className="btn-round"
              color="primary"
              onClick={() => this.props.logout()}
            >
              Log out
            </Button>
          </CardBody>
        </Card>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authStore.isAuthenticated,
  }
}

export default connect(mapStateToProps, {logout})(Dashboard);
