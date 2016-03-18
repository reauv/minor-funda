import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { fetchObject } from 'Sources/ObjectSource';
import ObjectDetailItem from 'Components/ObjectDetailItem/ObjectDetailItem';

class ObjectDetailContainer extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		object: PropTypes.object.isRequired,
		params: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
	}

	/**
	 * Invoked once, both on the client and server, immediately
	 * before the initial rendering occurs.
	 *
	 * @return {void}
	 */
	componentWillMount() {
		this.props.dispatch(fetchObject(this.props.params.id));
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<ObjectDetailItem object={this.props.object} />
		);
	}
}

function select(state) {
	return {
		object: state.object.detail,
	};
}

export default connect(select)(ObjectDetailContainer);
