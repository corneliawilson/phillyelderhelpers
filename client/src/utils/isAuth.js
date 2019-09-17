import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, checkAuthentication } from '../actions/auth-actions';

const loading = <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class IsAuth extends Component {

	render() {
		if (this.props.fetching_login === true) {
			return (loading);
		}
		if (this.props.isAuthenticated){ 
				return this.props.children;
		} else {
			this.props.checkAuthentication();
			return <Redirect to="/login" />;
		}
	}
}

function mapStateToProps(state) {
	return {
		isAuthenticated: state.authStore.isAuthenticated,
		fetching_login: state.authStore.fetching_login
	}
}

export default connect(mapStateToProps, {login, checkAuthentication})(IsAuth);