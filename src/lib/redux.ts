import { initializeStore } from './initStore';
import { Store } from 'redux';

let reduxStore: Store;
export const getOrInitializeStore = (initialState: any) => {
	// Always make a new store if server, otherwise state is shared between requests
	if (typeof window === 'undefined') {
		return initializeStore(initialState);
	}

	// Create store if unavailable on the client and set it on the window object
	if (!reduxStore) {
		reduxStore = initializeStore(initialState);
	}

	return reduxStore;
};