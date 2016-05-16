import 'Stylesheets/reset';
import 'Stylesheets/shared';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

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

function select(state) {
	return { ...state.position };
}

export default connect(select)(App);
