import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { 
  Container,
  Row,
  Col,
  Card, 
  CardBody, 
  Button 
} from 'reactstrap';

import Navigation from '../../components/Navigation';
import Avatar from '../../components/Avatar';
import ProfileInfo from './components/ProfileInfo';
import SkillDisplay from './components/SkillDisplay';
import GroupInfo from './components/GroupInfo';

import default_photo from '../../assets/default_user.png';

import { users, groups, skills } from '../../sample_data';

class VolunteerDashboard extends Component {

  constructor(props) {
    super(props);

    this.getGroupMembers = this.getGroupMembers.bind(this);

    this.state = {
    };
  }

  // user_id is id of current user
  getGroupMembers(group_id, user_id) {
    return users.filter(user => (
      user.group_ids.includes(group_id) && user.id !== user_id
    ));
  }

  render() {
    let user = users[0];

    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <Avatar photo={default_photo}/>
                  </Col>
                  <Col>
                    <ProfileInfo user={user} />
                  </Col>
                  <Col>
                    <SkillDisplay 
                      user_skills={user.skill_ids} 
                      skills={skills}
                      addSkill={(id) => console.log("adding ", id)}
                      removeSkill={(id) => console.log("removing ", id)}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    Your groups                
                  </Col>
                  <Col>
                    Add new group
                  </Col>
                </Row>
                {
                  user.group_ids.map(group_id => {
                    const group = groups.find(grp => grp.id === group_id);
                    return <GroupInfo group={group} members={this.getGroupMembers(group_id, user.id)} />
                  })
                }
                <Row>
                  <Col>
                    Group name                    
                  </Col>
                  <Col>
                    Edit (group leader only--invite or remove members)
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      avatar
                    </Row>
                    <Row>
                      name
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      avatar
                    </Row>
                    <Row>
                      name
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                Upcoming events & tasks (event details, confirm event, or no upcoming events -- create event button)
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                Past events
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          This is the volunteer dashboard
          <Navigation />  
        </Row>
      </Container>
    );
  }
}

export default VolunteerDashboard;
