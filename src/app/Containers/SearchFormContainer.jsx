import { reduxForm } from 'redux-form';
import React, { Component, PropTypes } from 'react';
import SearchForm from 'Components/SearchForm/SearchForm';

class SearchFormContainer extends Component {

	/**
	 * Validates the props used by the component.
	 *
	 * @type {Object}
	 */
	static propTypes = {
		location: PropTypes.object.isRequired,
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactElement}
	 */
	render() {
		return (
			<SearchForm {...this.props} />
		);
	}
}

const formConfig = {
	form: 'search',
	fields: ['address', 'minPrice', 'maxPrice'],
};

function select(state, props) {
	return {
		initialValues: {
			address: props.location.query.address,
			minPrice: props.location.query.minPrice,
			maxPrice: props.location.query.maxPrice,
		},
		addressSuggestions: state.search.suggestions,
	};
}

SearchFormContainer = reduxForm(formConfig, select)(SearchFormContainer);

export default SearchFormContainer;
