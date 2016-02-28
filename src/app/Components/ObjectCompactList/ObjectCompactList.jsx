import styles from './object_compact_list';
import { CircularProgress } from 'material-ui';
import React, { Component, PropTypes } from 'react';
import ObjectCompactItem from 'Components/ObjectCompactItem/ObjectCompactItem';

class ObjectList extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		results: PropTypes.array.isRequired,
		onItemClick: PropTypes.func.isRequired,
	}

	renderResults() {
		return this.props.results.map((object, i) =>
			<ObjectCompactItem
				key={i}
				object={object}
				onItemClick={this.props.onItemClick}
			/>
		);
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		const results = this.renderResults();

		return (
			<div className={styles.wrapper}>
				{results.length > 0
					? results
					: <CircularProgress className={styles.loader} /> }
			</div>
		);
	}
}

export default ObjectList;
