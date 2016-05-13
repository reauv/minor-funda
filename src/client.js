import React from 'react';
import routes from 'routes';
import createStore from 'Core/Store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = createStore(window.__INITIAL_STATE__);

// Render the application
ReactDOM.render(
	(
		<Provider store={store}>
			{routes}
		</Provider>
	),
	document.getElementById('app')
);
