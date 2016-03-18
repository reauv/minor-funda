import styles from './object_item.css';
import React, { Component, PropTypes } from 'react';
import { RaisedButton } from 'material-ui';

class ObjectItem extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		object: PropTypes.object.isRequired,
		onItemClick: PropTypes.func.isRequired,
	}

	onShowClick = () => this.props.onItemClick(this.props.object.Id);

	getStatus() {
		if (this.props.object.IsVerkochtOfVerhuurd) {
			return (this.props.object.isVerkocht)
				? 'verkocht'
				: 'verhuurd';
		}

		return (this.props.object.Koopprijs) ? 'te koop' : 'te huur';
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<figure className={styles.figure}>
						<div className={styles.figure__overlay} />
						<img
							src={this.props.object.HoofdFoto}
							alt={`Foto van ${this.props.object.Adres}`}
					</figure>
					<div className={styles.info}>
						<header className={styles.header}>
							<p className={styles.status}>
								{this.getStatus()}
							</p>
							<h3 className={styles.title}>
								{this.props.object.Adres}
							</h3>
						</header>
						<p className={styles.location}>
							{this.props.object.Postcode} - {this.props.object.Woonplaats}
						</p>
						<p className={styles.price}>
							EUR {this.props.object.Koopprijs}
						</p>
						<div className={styles.action}>
							<RaisedButton label="Bekijk" primary onClick={this.onShowClick} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ObjectItem;
