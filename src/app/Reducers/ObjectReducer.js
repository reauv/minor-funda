import { createReducer } from 'redux-act';
import * as actions from 'Actions/ObjectActions';

const initialState = {
	nearbyResults: [],
};

export default createReducer({
	[actions.fetchingNearbyObjects]: (state) => state,
	[actions.fetchingNearbyObjectsFailed]: (state) => state,
	[actions.fetchedNearbyObjects]: (state, payload) => {
		return { ...state, nearbyResults: payload.Objects };
	},
}, initialState);
