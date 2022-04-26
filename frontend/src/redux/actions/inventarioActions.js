import * as actionTypes from '../constants/inventarioConstants';
import axios from "axios";

export const getInventario = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_INVENTARIO_REQUEST});
        
        const { data } = await axios.get("/api/inventario");

        dispatch({
            type: actionTypes.GET_INVENTARIO_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_INVENTARIO_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getInventarioDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_INVENTARIO_DETAILS_REQUEST});
        
        const { data } = await axios.get(`/api/inventario/${id}`);
        
        dispatch({
            type: actionTypes.GET_INVENTARIO_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_INVENTARIO_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const removeInventarioDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_INVENTARIO_DETAILS_RESET,
    });
};