import {
	RESET_ERRORS
} from '../actions/error-actions';

const defaultState = {
	timeoutError: false,
	serverError: false,
	genericError: false
}

export default (state=defaultState, action={}) => {
	if (action.error !== undefined) {
		switch (action.error.code) {
			case 408: {
				return {
					...state,
					timeoutError: true
				}
			} 
			case undefined: {
				return {
					...state,
					serverError: true
				}
			}
			case 401: {
				return state
			}
			default:
				return {
					...state,
					genericError: true
				}
		}
	} else if (action.type === RESET_ERRORS) {
		return {
			...state,
			[action.name]: false
		}
	} else {
		return state;
	}
}