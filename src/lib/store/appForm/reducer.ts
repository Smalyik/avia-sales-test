/* eslint-disable default-case */
/* eslint-disable no-useless-return */
import { ActionTypes } from './actions';

interface Action {
	payload: object,
	type: string
}

export const initialState = Object.freeze({
	isFormAreaOpen: false,
	isSentSuccesfully: null,
	isModalOpen: false,
});

export default (state = initialState, action: Action) => {
	const { payload } = action;

	switch (action.type) {
		case ActionTypes.OPEN_FORM: {
			return { ...state, isFormAreaOpen: true };
		}

		case ActionTypes.ON_SUCCESS_SEND: {
			return { ...state, isSentSuccesfully: true };
		}

		case ActionTypes.TOGGLE_MODAL: {
			return { ...state, isModalOpen: payload || false };
		}

		case ActionTypes.RESET: {
			return initialState;
		}

		default:
			return state;
	}
};
