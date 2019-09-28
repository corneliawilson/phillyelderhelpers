import React, { Component, Fragment } from 'react';

import {
  Row,
  Col,
  Button
} from 'reactstrap';

import './components.css';

// PROPS:
// - user_skills: skill ids array
// - skills: all skill objects (id, name, description)
// - addSkill(id)
// - removeSkill(id)
class SkillDisplay extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(skill_id) {
    if (this.props.user_skills.includes(skill_id)) {
      this.props.removeSkill(skill_id);
    } else {
      this.props.addSkill(skill_id);
    }
  }

  render() {
  	return (
  	  <Fragment>
      {
        this.props.skills.map(skill => {
          let classes = "skillBar";
          if (this.props.user_skills.includes(skill.id))
            classes += " skillSelected";
          return (
            <Row 
              className={classes}
              onClick={() => this.handleClick(skill.id)}
            >
              {skill.name}
            </Row>
          );
        })
      }
  	  </Fragment>
  	);
	}
}

export default SkillDisplay;


