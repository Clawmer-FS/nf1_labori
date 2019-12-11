import React, {useReducer} from 'react';
import {LOGIN} from "../routes/routes";
import {withRouter} from 'react-router-dom';

const initialState = {
    token: null,
    isFetching: false
};

// actions
const SAVE_CURRENT_TOKEN_ON_STATE = 'SAVE_CURRENT_TOKEN_ON_STATE'; // si existe un token en localStorage, guardarlo en initialState
const DO_LOGOUT = 'DO_LOGOUT'; // para vaciar el token (esté activo o caducado) y redirigir a login

const AuthorizationReducer = (state = initialState, action) => {
    const newState = {...state};
    const {type} = {...action};

    if (type === SAVE_CURRENT_TOKEN_ON_STATE) {
        if (localStorage.getItem("TOKEN_KEY")) {
            newState.token = JSON.parse(localStorage.getItem("TOKEN_KEY"));
            console.log("Nuevo token guardado! " + newState.token);
        }
    }
    if (type === DO_LOGOUT) {
        newState.token = null;
        localStorage.removeItem("TOKEN_KEY");
        console.log("Token caducado, hacemos logout.");
    }

    return newState;
};

export const AuthReducer = () => useReducer(AuthorizationReducer, initialState);