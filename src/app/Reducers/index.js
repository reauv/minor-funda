import objectReducer from 'Reducers/ObjectReducer';
import searchReducer from 'Reducers/SearchReducer';
import { reducer as formReducer } from 'redux-form';
import positionReducer from 'Reducers/PositionReducer';

export default {
	form: formReducer,
	object: objectReducer,
	search: searchReducer,
	position: positionReducer,
};
