import * as actionTypes from '../constants/inventarioConstants';

export const getInventarioReducer = (state = { inventario: [] }, action) => {
    switch(action.type) {
        case actionTypes.GET_INVENTARIO_REQUEST:
            return {
                loading: true,
                inventario: [],
            };
        case actionTypes.GET_INVENTARIO_SUCCESS:
            return {
                loading: false,
                inventario: action.payload,
            };
        case actionTypes.GET_INVENTARIO_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const getInventarioDetailsReducer = (state = { inventario: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_INVENTARIO_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_INVENTARIO_DETAILS_SUCCESS:
            return {
                loading: false,
                inventario: action.payload
            };
        case actionTypes.GET_INVENTARIO_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case actionTypes.GET_INVENTARIO_DETAILS_RESET:
            return {
                inventario: {},
            };
        default:
            return state;
    }
};