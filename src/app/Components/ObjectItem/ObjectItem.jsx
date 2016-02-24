import styles from './object_item.css';
import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

class ObjectItem extends Component {

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
						<img src={this.props.object.FotoLargest} />
					</figure>
					<div className={styles.info}>
						<header className={styles.header}>
							<p className={styles.status}>
								{this.getStatus()}
							</p>
							<h1 className={styles.title}>
								{this.props.object.Adres}
							</h1>
						</header>
						<p className={styles.location}>
							{this.props.object.Postcode} - {this.props.object.Woonplaats}
						</p>
						<p className={styles.price}>
							EUR {this.props.object.Koopprijs}
						</p>
						<div className={styles.action}>
							<RaisedButton label="Bekijk" primary />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ObjectItem;
