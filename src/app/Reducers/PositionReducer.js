import { createReducer } from 'redux-act';
import * as actions from 'Actions/PositionActions';

const initialState = {
	coords: {},
	city: null,
	postal: null,
};

export default createReducer({
	[actions.fetchingPosition]: (state) => state,
	[actions.fetchingPositionFailed]: (state) => state,
	[actions.fetchedPosition]: (state, coords) => {
		return { ...state, coords };
	},
	[actions.fetchingPositionData]: (state) => state,
	[actions.fetchingPositionDataFailed]: (state) => state,
	[actions.fetchedPositionData]: (state, { postal, city }) => {
		return { ...state, postal, city };
	},
}, initialState);
