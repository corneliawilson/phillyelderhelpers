import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import ErrorReducer from './error-reducer';

const reducers = {
	authStore: AuthReducer,
	errorStore: ErrorReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;