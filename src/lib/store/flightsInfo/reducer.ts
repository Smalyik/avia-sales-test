/* eslint-disable default-case */
/* eslint-disable no-useless-return */
import { ActionTypes } from './actions';
import { AnyAction } from 'redux';

export const initialState = Object.freeze({
	flights: ['ff', 'ee'],
});

export default (state = initialState, action: AnyAction) => {
	const { payload } = action;

	switch (action.type) {
		case ActionTypes.ADD_FLIGHTS: {
			console.log('object')
			return { ...state, ...payload };
		}

		default:
			return state;
	}
};
