import {combineReducers} from 'redux';
import columnListReducer from './columnReducer';

export default combineReducers({
    columns: columnListReducer
});