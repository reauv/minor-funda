import styles from './home.css';
import { FlatButton } from 'material-ui';
import { push } from 'react-router-redux';
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

	onShowAllClick = () => this.props.dispatch(push('/nearby'));

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div>
				<div>
					<SearchFormContainer />
				</div>

				<div className={styles.nearby}>
					<h2 className={styles.nearby__title}>
						Woningen bij jou in de buurt
					</h2>
					<div className={styles.nearby__list}>
						<ObjectCompactList results={this.props.nearbyResults} />
					</div>
					<div className={styles.nearby__action}>
						<FlatButton
							label="Bekijk allemaal"
							onClick={this.onShowAllClick}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
