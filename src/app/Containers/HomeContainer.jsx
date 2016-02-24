import _ from 'lodash';
import { connect } from 'react-redux';
import Home from 'Components/Home/Home';
import React, { Component } from 'react';

class HomeContainer extends Component {

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<Home {...this.props} />
		);
	}
}

function select(state) {
	return {
		nearbyResults: _.take(state.object.nearbyResults, 3),
	};
}

export default connect(select)(HomeContainer);
