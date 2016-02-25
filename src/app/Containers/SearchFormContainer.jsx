import { reduxForm } from 'redux-form';
import React, { Component } from 'react';
import SearchForm from 'Components/SearchForm/SearchForm';

class SearchFormContainer extends Component {

	/**
	 * Construct the component.
	 *
	 * @param  {Object} props   - The properties of the component.
	 * @param  {Object} context - The context of the component.
	 * @constructor
	 */
	constructor(props, context) {
		super(props, context);
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

function select(state) {
	return {
		addressSuggestions: state.search.suggestions,
	};
}

SearchFormContainer = reduxForm(formConfig, select)(SearchFormContainer);

export default SearchFormContainer;
