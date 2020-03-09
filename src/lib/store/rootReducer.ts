import { combineReducers } from 'redux';
import appForm from './appForm/reducer';
import flightsInfo from './flightsInfo/reducer';

const createRootReducer = () =>
	combineReducers({
		appForm,
		flightsInfo,
	});

export default createRootReducer;
