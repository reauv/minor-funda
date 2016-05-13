import { Link } from 'react-router';
import styles from './object_compact_item';
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
			<Card className={styles.container}>
				<CardMedia>
					<img src={this.props.object.FotoLargest} className={styles.photo} />
				</CardMedia>
				<CardTitle>
					<h1 className={styles.title}>{this.props.object.Adres}</h1>
				</CardTitle>
				<CardActions className={styles.actions}>
					<Link to="{{`/object/${this.props.object.Id}`}}">
						Bekijk
					</Link>
				</CardActions>
			</Card>
		);
	}
}

export default ObjectCompactItem;
