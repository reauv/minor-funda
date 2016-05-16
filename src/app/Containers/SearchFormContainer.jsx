import { reduxForm } from 'redux-form';
import React, { Component } from 'react';
import SearchForm from 'Components/SearchForm/SearchForm';

class SearchFormContainer extends Component {

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

function select(state) {
	return {
		addressSuggestions: state.search.suggestions,
	};
}

SearchFormContainer = reduxForm(formConfig, select)(SearchFormContainer);

export default SearchFormContainer;
