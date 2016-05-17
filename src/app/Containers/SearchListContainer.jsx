import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { searchObjects } from 'Sources/ObjectSource';
import ObjectList from 'Components/ObjectList/ObjectList';
import SearchFormContainer from 'Containers/SearchFormContainer';

class SearchListContainer extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		results: PropTypes.array,
		location: PropTypes.object.isRequired,
	}

	/**
	 * Invoked once, only on the client (not on the server), immediately
	 * after the initial rendering occurs.
	 *
	 * @return {void}
	 */
	componentDidMount() {
		searchObjects(this.props.location.query);
	}

	/**
	 * Invoked when a component is receiving new props.
	 * This method is not called for the initial render.
	 *
	 * @param  {Object} nextProps
	 * @return {void}
	 */
	componentWillReceiveProps(nextProps) {
		if (nextProps.location.query !== this.props.location.query) {
			searchObjects(nextProps.location.query);
		}
	}

	/**
	 * The data that should be fetched for this container.
	 *
	 * @param  {Object} params
	 * @param  {Object} location
	 * @return {Promise}
	 */
	static fetchData(params, location) {
		return searchObjects(location.query);
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<div className="wrapper">
				<SearchFormContainer {...this.props} />
				<ObjectList results={this.props.results} />
			</div>
		);
	}
}

function select(state) {
	return {
		results: state.object.searchResults,
	};
}

export default connect(select)(SearchListContainer);
