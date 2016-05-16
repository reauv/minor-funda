import styles from './object_compact_item';
import React, { Component, PropTypes } from 'react';

class ObjectCompactItem extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		object: PropTypes.object,
		onItemClick: PropTypes.func.isRequired,
	}

	onShowClick = () => this.props.onItemClick(this.props.object.Id);

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div className={styles.container}>
					<img
						className={styles.photo}
						src={this.props.object.FotoLargest}
						alt={`Foto van ${this.props.object.Adres}`}
					/>
					<h1 className={styles.title}>{this.props.object.Adres}</h1>
					<button onClick={this.onShowClick}>Bekijk</button>
			</div>
		);
	}
}

export default ObjectCompactItem;
