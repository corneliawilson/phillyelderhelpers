import React, { Component, Fragment } from 'react';

import {
  Row,
  Col,
  Button,
  Card,
  CardBody
} from 'reactstrap';

import './components.css';
import Avatar from '../../../components/Avatar';

// PROPS:
// - group
// - members
class GroupInfo extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Clicked");
  }

  render() {
  	return (
  	  <Fragment>
        <Row>
          <Col>{this.props.group.name}</Col>
          <Col><Button>Edit</Button></Col>
        </Row>
        <Row>
          { this.props.members.map(member => (
            <Col>
              <Card>
                <CardBody>
                  <Avatar photo={member.photo} size="small" />
                </CardBody>
              </Card>
            </Col>
          ))
        }
        </Row>
  	  </Fragment>
  	);
	}
}

export default GroupInfo;


