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
		title: PropTypes.string,
		onItemClick: PropTypes.func,
		results: PropTypes.array.isRequired,
	}

	renderResults() {
		return this.props.results.map((object, i) =>
			<ObjectItem
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
				<h2 className={styles.title}>{this.props.title}</h2>

				{results.length > 0
					? <div className={styles.results}>{results}</div>
					: <div>Loading</div>
				}
			</div>
		);
	}
}

export default ObjectList;
