export const ActionTypes = {
	OPEN_FORM: 'app/open-form',
	ON_SUCCESS_SEND: 'app/on-success-send',
	TOGGLE_MODAL: 'app/toggle-modal',
	RESET: 'app/reset-modal',
};

export const openFormArea = () => ({
	type: ActionTypes.OPEN_FORM,
});

export const onSuccessSend = () => ({
	type: ActionTypes.ON_SUCCESS_SEND,
});

export const toggleModal = payload => ({
	type: ActionTypes.TOGGLE_MODAL,
	payload,
});

export const reset = () => ({
	type: ActionTypes.RESET,
});
