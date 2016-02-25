import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import objectReducer from 'Reducers/ObjectReducer';
import searchReducer from 'Reducers/SearchReducer';
import { reducer as formReducer } from 'redux-form';
import positionReducer from 'Reducers/PositionReducer';

export default combineReducers({
	form: formReducer,
	routing: routeReducer,
	object: objectReducer,
	search: searchReducer,
	position: positionReducer,
});
