import React, { Component, PropTypes } from 'react';
import ObjectCompactItem from 'Components/ObjectCompactItem/ObjectCompactItem';

class ObjectList extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		results: PropTypes.array,
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div>
				{this.props.results.map((object, i) =>
					<ObjectCompactItem object={object} key={i} />
				)}
			</div>
		);
	}
}

export default ObjectList;
