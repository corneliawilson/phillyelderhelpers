import client from '../utils/feathers';

export const AUTH_CLIENT_REQUEST = 'AUTH_CLIENT_REQUEST';
export const AUTH_CLIENT_SUCCESS = 'AUTH_CLIENT_SUCCESS';
export const AUTH_CLIENT_FAILURE = 'AUTH_CLIENT_FAILURE';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
export const AUTH_FAILURE = 'AUTH_FAILURE'

function requestClient(name) {
	return {
		type: AUTH_CLIENT_REQUEST,
		name
	}
}

function successClient(name, data) {
	return {
		type: AUTH_CLIENT_SUCCESS,
		name,
		data
	}
}

function failureClient(name, error) {
	return {
		type: AUTH_CLIENT_FAILURE,
		name,
		error
	}
}

export function login(credentials) {
	const { email, password } = credentials;
	return dispatch => {
		dispatch(requestClient(LOGIN));
		return client.authenticate({
			strategy: 'local',
			email, 
			password
		}).then(response => {
			window.localStorage.setItem('accessToken', response.accessToken);
			return client.passport.verifyJWT(response.accessToken);
		}).then (payload => {
			return client.service('users').get(payload.userId);
		}).then (user => {
			dispatch(successClient(LOGIN, user));
		}).catch(error => {
			dispatch(failureClient(LOGIN, error));
			return null;
		});
	}
}


export function register(credentials, token) {
	const { 
		password, 
		first_name,
		last_name,
		address,
		zip,
		city,
		state,
		country,
		telephone
	} = credentials;

	return dispatch => {
		dispatch(requestClient(REGISTER));
			return client.service('authManagement').create({
				action: 'verifySignupLong',
				value: token,
				credentials: { 
					password: password, 
					first_name: first_name,
					last_name: last_name,
					address: address,
					zip: zip,
					city: city,
					state: state,
					country: country,
					telephone: telephone
				}
			}).then (response => {
				dispatch(successClient(REGISTER));
				dispatch(login({ 
					email: response.email,
					password: password 
				}));
			}).catch(error => {
				dispatch(failureClient(REGISTER, error));
				console.log("Error: ", error);
				return null;
			});
	}
}

export function logout() {
	return dispatch => {
		dispatch(requestClient(LOGOUT));
		client.logout();
		window.localStorage.removeItem('accessToken');
		return null;
	}
}

export function checkAuthentication() {
	return dispatch => {
		return client.authenticate({
			strategy: 'jwt',
			accessToken: window.localStorage.accessToken
		}).then(response => {
			return client.passport.verifyJWT(response.accessToken);
		}).then (payload => {
			return client.service('users').get(payload.userId);
		}).then (user => {
			dispatch(successClient(LOGIN, user));
		}).catch(error => {
			dispatch(failureClient(AUTH_FAILURE, error));
			console.log("Error: ", error);
			return null;
		});
	}
}

export function resetPasswordWithReauthentication(credentials) {
	const { email, password, new_password } = credentials;

	return dispatch => {
		dispatch(requestClient(LOGIN));
		return client.authenticate({
			strategy: 'local',
			email, 
			password
		}).then(response => {
			window.localStorage.setItem('accessToken', response.accessToken);
			return client.passport.verifyJWT(response.accessToken);
		}).then (payload => {
			return client.service('users').get(payload.userId);
		}).then (user => {
			dispatch(successClient(LOGIN, user));
			dispatch(requestClient(PASSWORD_CHANGE));
			return client.service('users').patch(user.id, {
				password: new_password
			}).then (response => {
				dispatch(successClient(PASSWORD_CHANGE));
			}).catch(error => {
				dispatch(failureClient(PASSWORD_CHANGE, error));
				console.log("Error: ", error);
				return null;
			});
		}).catch(error => {
			dispatch(failureClient(LOGIN, error));
			return null;
		});
	}
}

export function resetPasswordNoReauthentication(credentials) {
		const { user_id, new_password } = credentials;
		return dispatch => {
			dispatch(requestClient(PASSWORD_CHANGE));
				return client.service('users').patch(user_id, {
					'password': new_password
				}).then (response => {
					dispatch(successClient(PASSWORD_CHANGE));
				}).catch(error => {
					dispatch(failureClient(PASSWORD_CHANGE, error));
					console.log("Error: ", error);
					return null;
				});
		}
}

