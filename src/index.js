// Load deps
import React from 'react';
import store from 'Core/Store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'Containers/App';
import HomeContainer from 'Containers/HomeContainer';
import NearbyListContainer from 'Containers/NearbyListContainer';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Render the application
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={HomeContainer} />
				<Route path="nearby" component={NearbyListContainer} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
