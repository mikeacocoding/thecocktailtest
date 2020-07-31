import { combineReducers } from 'redux';
import { listarUsuarios } from './users';


const rootReducer = combineReducers({
    users: listarUsuarios
});

export default rootReducer;