import 'isomorphic-fetch';
import getRoutes from 'routes';
import createStore from 'Core/Store';
import { createElement } from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'react-router/lib/createMemoryHistory';


export default function (request, response) {
	const location = createLocation(request.url);
	const memoryHistory = createHistory(request.originalUrl);
	const store = createStore(memoryHistory);
	const history = syncHistoryWithStore(memoryHistory, store);
	const routes = getRoutes(store);

	match({ history, routes, location }, (error, redirectLocation, renderProps) => {
		if (error) {
			return response.status(500).end('Internal server error');
		}

		if (!renderProps) {
			return response.status(400).end('Not found');
		}

		const componentHtml = renderToString(
			createElement(
				Provider,
				{ store },
				createElement(RouterContext, renderProps),
			)
		);

		const HTML = `
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width">
			<title>React Redux Application - Universal</title>
			<link href='https://fonts.googleapis.com/css?family=Oswald:400,700,300' rel='stylesheet' type='text/css'>
			<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic' rel='stylesheet' type='text/css'>
			<link rel='stylesheet' href='/main.css' type='text/css'>
		</head>
		<body>
			<div id="app">${componentHtml}</div>
			<script src="http://0.0.0.0:8888/bundle.client.js"></script></body>
		</body>
		</html>
		`;
		response.end(HTML);
	});
}
