import getRoutes from 'routes';
import ReactDOM from 'react-dom';
import createStore from 'Core/Store';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store = createStore(browserHistory);
syncHistoryWithStore(browserHistory, store);

// Render the application
ReactDOM.render(
	getRoutes(store),
	document.getElementById('app')
);
