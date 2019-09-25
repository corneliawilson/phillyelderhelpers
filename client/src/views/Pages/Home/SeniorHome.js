import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

import { 
  Container, 
  Row, 
  Col,
  Button,
  Card,
  CardBody
} from 'reactstrap';

import Navigation from '../../../components/Navigation';

class SeniorHome extends Component {

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h3><b>How it works</b></h3>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <h4><b>Sign up</b></h4>
                  <p><h5>Are you a senior citizen in Philadelphia who needs help with yardwork or basic home maintenance?
					 <br/>
					 <br/>
					 Do you know a senior citizen in Philadelphia who needs help with yardwork or basic home maintenance?
					 <br/>
					 <br/>
					 Sign up for <b><i>Philly Elder Helpers</i></b> by clicking on the <b>Register now</b> button.
					 <br/>
					 <br/>
					 We will contact you when volunteers will be in your neighborhood.
				  </h5></p>
                  <Link to="register/senior/">
                    <Button>Register now</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardBody>
                  <h4><b>Add a task request</b></h4>
                  <p><h5>What household tasks present a challenge for you?
				     <br/>
				     <br/>
				     How can we help?
					 <br/>
					 <br/>
					 Let us know by clicking on the <b>Task request</b> button.
				  </h5></p>
                  <Link to="register/senior/request/">
                    <Button>Task request</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardBody>
                  <h4><b>Confirm your visit</b></h4>
                  <p><h5>Volunteers from <b><i>Philly Elder Helpers</i></b> are going to be in your neighborhood.  They are ready to help you!
					 <br/>
					 <br/>
					 Click on the <b>Confirm visit</b> button to confirm that you want volunteers to visit you on the specified date for your neighborhood.
				  </h5></p>
                  <Link to="register/senior/confirm/">
                    <Button>Confirm visit</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <Navigation />
        
      </div>
    );
  }
}

export default SeniorHome;
