import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import React, { Component, PropTypes } from 'react';
import { fetchNearbyObjects } from 'Sources/ObjectSource';
import ObjectList from 'Components/ObjectList/ObjectList';

class NearbyListContainer extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		results: PropTypes.array,
		onItemClick: PropTypes.func,
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
			<ObjectList
				onItemClick={this.props.onItemClick}
				title="Woningen bij jou in de buurt"
				results={this.props.results}
			/>
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

function mapDispatch(dispatch) {
	return {
		onItemClick: (id) => dispatch(push(`/object/${id}`)),
	};
}

export default connect(select, mapDispatch)(NearbyListContainer);
