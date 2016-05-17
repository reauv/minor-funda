import reducer from 'Reducers';
import thunk from 'redux-thunk';
import { assignAll } from 'redux-act';
import { browserHistory, createMemoryHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import * as objectActions from 'Actions/ObjectActions';
import * as searchActions from 'Actions/SearchActions';
import * as positionActions from 'Actions/PositionActions';

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

// Set up router middleware
const history = (typeof window === 'undefined') ? createMemoryHistory() : browserHistory;
const reduxRouterMiddleware = syncHistory(history);

export default function (state = {}) {
	const store = createStore(
		reducer,
		state,
		compose(
			applyMiddleware(reduxRouterMiddleware, thunk),
			hasDevToolsExtension() ? window.devToolsExtension() : f => f,
		),
	);

	// Assign functions to the store
	assignAll(positionActions, store);
	assignAll(objectActions, store);
	assignAll(searchActions, store);

	return store;
}
