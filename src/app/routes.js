import React from 'react';
import store from 'Core/Store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'Containers/App';
import HomeContainer from 'Containers/HomeContainer';
import NearbyListContainer from 'Containers/NearbyListContainer';
import SearchListContainer from 'Containers/SearchListContainer';
import ObjectDetailContainer from 'Containers/ObjectDetailContainer';

export default (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={HomeContainer} />
				<Route path="nearby" component={NearbyListContainer} />
				<Route path="search" component={SearchListContainer} />
				<Route path="object/:id" component={ObjectDetailContainer} />
			</Route>
		</Router>
	</Provider>
);
