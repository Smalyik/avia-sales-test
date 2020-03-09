import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './store/rootReducer';
import thunk from 'redux-thunk';

const initialState: object = {};

const rootReducer = createRootReducer();

export const initializeStore = (preloadedState = initialState) => {
	return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
};
