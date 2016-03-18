// Load deps
import routes from 'routes';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Render the application
ReactDOM.render(
	routes,
	document.getElementById('app')
);
