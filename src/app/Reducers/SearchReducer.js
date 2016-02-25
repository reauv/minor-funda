import { createReducer } from 'redux-act';
import * as actions from 'Actions/SearchActions';

const initialState = {
	suggestions: [],
};

export default createReducer({
	[actions.fetchingSuggestions]: (state) => state,
	[actions.fetchingSuggestionsFailed]: (state) => state,
	[actions.fetchedSuggestions]: (state, suggestions) => {
		return { ...state, suggestions };
	},
}, initialState);
