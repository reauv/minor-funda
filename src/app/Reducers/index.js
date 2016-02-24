import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import objectReducer from 'Reducers/ObjectReducer';
import positionReducer from 'Reducers/PositionReducer';

export default combineReducers({
	routing: routeReducer,
	object: objectReducer,
	position: positionReducer,
});
