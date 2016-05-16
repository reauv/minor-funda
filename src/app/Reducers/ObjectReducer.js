import { createReducer } from 'redux-act';
import * as actions from 'Actions/ObjectActions';

const initialState = {
	detail: {},
	nearbyResults: [],
	searchResults: [],
};

export default createReducer({
	[actions.fetchingNearbyObjects]: (state) => {
		return { ...state, nearbyResults: initialState.nearbyResults };
	},
	[actions.fetchingNearbyObjectsFailed]: (state) => state,
	[actions.fetchedNearbyObjects]: (state, payload) => {
		return { ...state, nearbyResults: payload.Objects };
	},

	[actions.searchingObjects]: (state) => {
		return { ...state, searchResults: initialState.searchResults };
	},
	[actions.searchingObjectsFailed]: (state) => state,
	[actions.searchedObjects]: (state, payload) => {
		return { ...state, searchResults: payload.Objects };
	},

	[actions.fetchingObject]: (state) => {
		return { ...state, detail: initialState.detail };
	},
	[actions.fetchingObjectFailed]: (state) => state,
	[actions.fetchedObject]: (state, payload) => {
		return { ...state, detail: payload };
	},
}, initialState);
