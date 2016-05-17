import styles from './home.css';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { isNode } from 'Utilities/environment';
import React, { Component, PropTypes } from 'react';
import { fetchNearbyObjects } from 'Sources/ObjectSource';
import SearchFormContainer from 'Containers/SearchFormContainer';
import ObjectCompactList from 'Components/ObjectCompactList/ObjectCompactList';

class Home extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		dispatch: PropTypes.func,
		nearbyResults: PropTypes.array,
	}

	/**
	 * Invoked once, both on the client and server, immediately
	 * before the initial rendering occurs.
	 *
	 * @return {void}
	 */
	componentWillMount() {
		fetchNearbyObjects();
	}

	onNearbyItemClick = (id) => this.props.dispatch(push(`/object/${id}`))

	/**
	 * Render the list with nearby items.
	 *
	 * @return {ReactElement}
	 */
	renderNearby() {
		if (isNode() || !window.navigator) {
			return (
				<div className={styles.nearby}>
					<p className={styles.nearby__error}>
						Helaas kunnen wij jouw locatie niet ophalen.
						Gebruik het zoekveld om een woning te zoeken bij jou
						in de buurt.
					</p>
				</div>
			);
		}

		return (
			<div className={styles.nearby}>
				<h2 className={styles.nearby__title}>
					Woningen bij jou in de buurt
				</h2>
				<div className={styles.nearby__list}>
					<ObjectCompactList
						results={this.props.nearbyResults}
						onItemClick={this.onNearbyItemClick}
					/>
				</div>
				<div className={styles.nearby__action}>
					<Link to="/nearby">
						Bekijk allemaal
					</Link>
				</div>
			</div>
		);
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div className={styles.wrapper}>
				<div className={styles.search}>
					<SearchFormContainer {...this.props} />
				</div>

				{this.renderNearby()}

			</div>
		);
	}
}

export default Home;
