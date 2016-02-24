import styles from './home.css';
import React, { Component, PropTypes } from 'react';
import { fetchNearbyObjects } from 'Sources/ObjectSource';
import ObjectCompactList from 'Components/ObjectCompactList/ObjectCompactList';

class Home extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
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

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div>
				<h2>Woningen bij jou in de buurt</h2>
				<div className={styles.}
				<ObjectCompactList results={this.props.nearbyResults} />
			</div>
		);
	}
}

export default Home;
