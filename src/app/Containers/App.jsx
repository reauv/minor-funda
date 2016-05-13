import 'Stylesheets/reset';
import 'Stylesheets/shared';
import theme from 'Misc/theme';
import React, { Component, PropTypes } from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

import Header from 'Components/Header/Header';

class App extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		children: PropTypes.node,
	}

	/**
	 * Validates the context used by the component.
	 *
	 * @type {Object}
	 */
	static childContextTypes = {
		muiTheme: React.PropTypes.object,
	}

	/**
	 * Get the child context for the component.
	 *
	 * @return {Object}
	 */
	getChildContext() {
		return {
			muiTheme: ThemeManager.getMuiTheme(
				theme,
				{ userAgent: 'all' },
			),
		};
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		);
	}
}

export default App;
