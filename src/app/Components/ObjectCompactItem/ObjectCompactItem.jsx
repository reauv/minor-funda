import { Paper } from 'material-ui';
import React, { Component, PropTypes } from 'react';

class ObjectCompactItem extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		object: PropTypes.object,
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<Paper>
				{this.props.object.Adres}
			</Paper>
		);
	}
}

export default ObjectCompactItem;
