import reducer from 'Reducers';
import thunk from 'redux-thunk';
import { assignAll } from 'redux-act';
import { browserHistory, createMemoryHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import * as objectActions from 'Actions/ObjectActions';
import * as searchActions from 'Actions/SearchActions';
import * as positionActions from 'Actions/PositionActions';

// Set up router middleware
const history = (typeof window === 'undefined') ? createMemoryHistory() : browserHistory;
const reduxRouterMiddleware = syncHistory(history);

// Set up store
const store = createStore(
	reducer,
	{},
	compose(
		applyMiddleware(reduxRouterMiddleware, thunk),
		// window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

// Assign functions to the store
assignAll(positionActions, store);
assignAll(objectActions, store);
assignAll(searchActions, store);

export default store;
