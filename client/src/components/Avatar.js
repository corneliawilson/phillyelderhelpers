import React, { Fragment } from 'react';

import './components.css';

// PROPS:
//  - photo
//  - small (bool)
const Avatar = (props) => {
	const classes = props.small ? "avatar-sm" : "avatar";

	return (
	  <Fragment>
	    <img src={props.photo} alt="profile" className={classes}/>
	  </Fragment>
	);
}


export default Avatar;


