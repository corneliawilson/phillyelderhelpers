import React, { Component, Fragment } from 'react';

import {
  Row,
  Col,
  Button
} from 'reactstrap';

// PROPS:
// - user: name, email, phone, photo, group_leader, group_ids, skills, address
// - edit functions? onEdit?
class ProfileInfo extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {

    }
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    const user = this.props.user;
  	return (
  	  <Fragment>
        <Row>{user.name}</Row>
        <Row>{user.email}</Row>
        <Row>{user.phone}</Row>
        <Row>(email/phone preferences?)</Row>
        <Row>{user.group_leader ? "Group leader" : "Group member"}</Row>
  	  </Fragment>
  	);
	}
}

export default ProfileInfo;


