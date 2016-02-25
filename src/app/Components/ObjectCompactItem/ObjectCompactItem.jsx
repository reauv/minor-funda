import styles from './object_compact_item';
import { push } from 'react-router-redux';
import React, { Component, PropTypes } from 'react';

import { Card, CardMedia, CardTitle, CardActions, FlatButton } from 'material-ui';

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
			<Card className={styles.container}>
				<CardMedia>
					<img src={this.props.object.FotoLargest} className={styles.photo} />
				</CardMedia>
				<CardTitle>
					<h1 className={styles.title}>{this.props.object.Adres}</h1>
				</CardTitle>
				<CardActions className={styles.actions}>
					<FlatButton label="Bekijk"/>
				</CardActions>
			</Card>
		);
	}
}

export default ObjectCompactItem;
