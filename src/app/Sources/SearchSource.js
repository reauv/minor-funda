import _ from 'lodash';
import * as searchActions from 'Actions/SearchActions';

const SUGGESTIONS_ENDPOINT = `http://zb.funda.info/frontend/geo/suggest`;

export function fetchSuggestions(value) {
	searchActions.fetchingSuggestions();

	return fetch(`${SUGGESTIONS_ENDPOINT}/?query=${value}&max=5&type=koop`)
		.then(response => response.json())
		.then(response => searchActions.fetchedSuggestions(response.Results))
		.catch(error => _.defer(() => { throw error; }));
}
