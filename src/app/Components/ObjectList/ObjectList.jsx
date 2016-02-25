import styles from './object_list';
import React, { Component, PropTypes } from 'react';
import ObjectItem from 'Components/ObjectItem/ObjectItem';

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
			<div className={styles.wrapper}>
				{this.props.results.map((object, i) =>
					<ObjectItem object={object} key={i} />
				)}
			</div>
		);
	}
}

export default ObjectList;
