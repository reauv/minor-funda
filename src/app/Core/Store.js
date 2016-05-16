import reducers from 'Reducers';
import thunk from 'redux-thunk';
import { assignAll } from 'redux-act';
import { combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createStore as _createStore, applyMiddleware, compose } from 'redux';

import * as objectActions from 'Actions/ObjectActions';
import * as searchActions from 'Actions/SearchActions';
import * as positionActions from 'Actions/PositionActions';

const initialState = {};

/**
 * Check if the environement is a browser and has the dev tools extension.
 *
 * @return {Boolean}
 */
function hasDevToolsExtension() {
	return (
		typeof window === 'object'
		&& typeof window.devToolsExtension !== 'undefined'
	);
}

/**
 * Store factory.
 *
 * @param  {Object} history
 * @return {Object}
 */
export default function createStore(history) {
	// Set up router middleware
	const reduxRouterMiddleware = routerMiddleware(history);

	// Set up store
	const store = _createStore(
		combineReducers({
			...reducers,
			routing: routerReducer,
		}),
		initialState,
		compose(
			applyMiddleware(reduxRouterMiddleware, thunk),
			hasDevToolsExtension() ? window.devToolsExtension() : f => f,
		)
	);

	// Assign functions to the store
	assignAll(positionActions, store);
	assignAll(objectActions, store);
	assignAll(searchActions, store);

	return store;
}
