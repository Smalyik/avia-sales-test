import { initializeStore } from './initStore';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';

let reduxStore: Store;

const getOrInitializeStore = (initialState?: any): Store => {
	// Create store if unavailable on the client and set it on the window object
	if (!reduxStore) {
		reduxStore = initializeStore(initialState);
	}

	return reduxStore;
};

interface IWithRedux {
	initialReduxState: Store;
	props: any;
}

export const withRedux = (PageComponent: React.ElementType): React.ElementType => {
	const WithRedux = ({ initialReduxState, ...props }: IWithRedux): any => {
		const store = getOrInitializeStore(initialReduxState);
		return (
			<Provider store={store}>
				<PageComponent {...props} />
			</Provider>
		);
	};

	return WithRedux;
};
