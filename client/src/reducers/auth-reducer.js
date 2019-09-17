import {
	AUTH_CLIENT_REQUEST,
	AUTH_CLIENT_SUCCESS,
	AUTH_CLIENT_FAILURE,
	LOGIN,
	LOGOUT,
	REGISTER,
	PASSWORD_CHANGE,
	AUTH_FAILURE
} from '../actions/auth-actions';

const defaultState = {
	fetching_login: false,
	fetching_register: false,
	fetching_password_change: false,

	isAuthenticated: false,
	user: '',

	error: null,
	password_change_error: false,
	login_error: false,
	registration_error: false
}

export default (state=defaultState, action={}) => {

	switch (action.type) {

		// REQUESTS //
		case AUTH_CLIENT_REQUEST: {
			switch (action.name) {
				case LOGIN: {
					return {
						...state,
						fetching_login: true,
						isAuthenticated: false,
						login_error: false,
						error: null
					}
				}
				case LOGOUT: {
					return {
						...state,
						fetching_login: false,
						isAuthenticated: false,
						error: null,
						login_error: false,
						user: {}
					}
				}
				case REGISTER: {
					return {
						...state,
						fetching_register: true,
						registration_error: false,
					}
				}
				case PASSWORD_CHANGE: {
					return {
						...state,
						fetching_password_change: true,
						password_change_error: false
					}
				}
				default:
					return state;
			}
		}

		// SUCCESSES //
		case AUTH_CLIENT_SUCCESS: {
			switch (action.name) {
				case LOGIN: {
					return {
						...state,
						fetching_login: false,
		        login_error: null,
		        user: action.data,
						isAuthenticated: true,
					}
				}
				case REGISTER: {
					return {
						...state,
						fetching_register: false,
						registration_error: false
					}
				}
				case PASSWORD_CHANGE: {
					return {
						...state,
						fetching_password_change: false,
						password_change_error: false
					}
				}
				default:
					return state;
			}
		}

		// FAILURES //
		case AUTH_CLIENT_FAILURE: {
			switch (action.name) {
				case LOGIN: {
					return {
						...state,
						fetching_login: false,
						isAuthenticated: false,
						error: action.error,
						login_error: true
					}
				}
				case AUTH_FAILURE: {
					return {
						...state,
						fetching_login: false,
						isAuthenticated: false,
						login_error: true,
						error: action.error
					}
				}
				case REGISTER: {
					return {
						...state,
						fetching_register: false,
						registration_error: true,
						isAuthenticated: false
					}
				}
				case PASSWORD_CHANGE: {
					return {
						...state,
						fetching_password_change: false,
						password_change_error: true,
						error: action.error
					}
				}
				default:
					return state;
			}
		}

		default: {
			if (action.error && action.error.code === 401) {
				return {
					...state,
					isAuthenticated: false,
					error: action.error
				}
			} else {
				return state;
			}
		}
	}

}