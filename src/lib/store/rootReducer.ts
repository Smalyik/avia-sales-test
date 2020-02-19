import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appForm from './appForm/reducer';

const createRootReducer = () =>
	combineReducers({
		appForm,
		form: formReducer,
	});

export default createRootReducer;
