require('isomorphic-fetch');

import routes from 'routes';
import createStore from 'Core/Store';
import { createElement } from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import createLocation from 'history/lib/createLocation';
import { RouterContext, match } from 'react-router';

function fetchAll(routerState) {
	return routerState.components.map(component => {
		if (component && component.fetchData) {
			return component.fetchData(routerState.params, routerState.location);
		}
	});
}

function render(response, store, routerState) {
	const finalState = store.getState();

	const componentHtml = renderToString(
		createElement(
			Provider,
			{ store },
			createElement(RouterContext, routerState),
		)
	);

	const HTML = `
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>Funda - Universal</title>
		<link href='https://fonts.googleapis.com/css?family=Oswald:400,700,300' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic' rel='stylesheet' type='text/css'>
		<link rel='stylesheet' href='/main.css' type='text/css'>
	</head>
	<body>
		<div id="app">${componentHtml}</div>
		<script>window.__INITIAL_STATE__ = ${JSON.stringify(finalState)}</script>
		<script src="http://0.0.0.0:8888/bundle.client.js"></script></body>
	</body>
	</html>
	`;
	response.end(HTML);
}

export default function (request, response) {
	const location = createLocation(request.url);
	const store = createStore({});

	match({ routes, location }, (error, redirectLocation, routerState) => {
		if (error) {
			return response.status(500).end('Internal server error');
		}

		if (!routerState) {
			return response.status(400).end('Not found');
		}

		Promise.all(fetchAll(routerState))
			.then(() => render(response, store, routerState))
			.catch((err) => {
				console.error(err.stack);
				response.status(500).end('Something went wrong');
			});
	});
}
