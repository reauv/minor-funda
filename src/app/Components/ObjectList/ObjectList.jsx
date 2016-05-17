import styles from './object_list';
import { CircularProgress } from 'material-ui';
import React, { Component, PropTypes } from 'react';
import ObjectItem from 'Components/ObjectItem/ObjectItem';

class ObjectList extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		title: PropTypes.string,
		results: PropTypes.array.isRequired,
	}

	/**
	 * Render the results.
	 *
	 * @return {Array}
	 */
	renderResults() {
		return this.props.results.map((object, i) =>
			<ObjectItem
				key={i}
				object={object}
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
				<h2 className={styles.title}>{this.props.title}</h2>

				{results.length > 0
					? <div className={styles.results}>{results}</div>
					: <CircularProgress className={styles.loader} /> }
			</div>
		);
	}
}

export default ObjectList;
