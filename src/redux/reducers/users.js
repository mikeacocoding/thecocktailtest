import { LISTAR_USUARIOS } from '../actions';

const initialState = {
    list: []
};

export function listarUsuarios(state = initialState, action){
    switch (action.type){
        case LISTAR_USUARIOS:
            return Object.assign({}, state, {list: action.payload});
        default:
            return state;
    }
}