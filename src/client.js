import React from 'react';
import routes from 'routes';
import createStore from 'Core/Store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const store = createStore(window.__INITIAL_STATE__);

document.querySelector('html').classList.add('js');

// Render the application
ReactDOM.render(
	(
		<Provider store={store}>
			{routes}
		</Provider>
	),
	document.getElementById('app')
);
