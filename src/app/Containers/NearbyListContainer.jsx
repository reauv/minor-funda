import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { fetchNearbyObjects } from 'Sources/ObjectSource';
import ObjectList from 'Components/ObjectList/ObjectList';

class LocationContainer extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		results: PropTypes.array,
	}

	/**
	 * Invoked once, both on the client and server, immediately
	 * before the initial rendering occurs.
	 *
	 * @return {void}
	 */
	componentWillMount() {
		fetchNearbyObjects();
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<ObjectList results={this.props.results} />
		);
	}
}

function select(state) {
	return {
		results: state.object.nearbyResults,
		city: state.position.city,
		postal: state.position.postal,
	};
}

export default connect(select)(LocationContainer);