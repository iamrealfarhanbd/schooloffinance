import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { key } from '../apiKey';
import AppReducer from './AppReducers';

const ISSERVER = typeof window === 'undefined';
// logged in user 
const userInfoFromStorage =
    !ISSERVER && localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null;
console.log(userInfoFromStorage);

// Initial state
const initialState = {
    userInfo: {
        loggedInUser: userInfoFromStorage,
    },
    error: '',
    resetPassword: '',
    userValidate: '',
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    // userLogin Action
    async function userLogin(username, password) {
        try {
            dispatch({
                type: 'USER_LOGIN_REQUEST',
            });
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const { data } = await axios.post(`${key}`, { username, password }, config);
            console.log(data);
            dispatch({
                type: 'USER_LOGIN_SUCCESS',
                payload: data,
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: 'USER_LOGIN_FAIL',
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    }

    // userValidation Action
    async function userValidation() {
        try {
            dispatch({ type: 'VALIDATE_USER_REQUEST' });
            // const userInfo = localStorage.getItem('userInfo')
            //     ? JSON.parse(localStorage.getItem('userInfo'))
            //     : null;
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfoFromStorage.token}`,
                },
            };
            const { data } = await axios.post(`${key}/validate`, {}, config);
            dispatch({
                type: 'VALIDATE_USER_SUCCESS',
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: 'VALIDATE_USER_FAIL',
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    }

    // user logout action
    async function userLogOut() {
        try {
            dispatch({
                type: 'USER_LOGOUT_REQUEST',
            });
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfoFromStorage.token}`,
                },
            };
            const { data } = await axios.post(`${key}/revoke`, {}, config);
            dispatch({
                type: 'USER_LOGOUT_SUCCESS',
                payload: data,
            });
            localStorage.removeItem('userInfo');
        } catch (error) {
            dispatch({
                type: 'USER_LOGOUT_FAIL',
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    }

    // reset user password action
    async function resetUserPassword(username) {
        try {
            dispatch({ type: 'RESET_PASSWORD_REQUEST' });
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const { data } = await axios.post(`${key}/resetpassword`, { username }, config);
            console.log(data.data.status);
            if (data.data.status === 200) {
                dispatch({
                    type: 'RESET_PASSWORD_SUCCESS',
                    payload: data,
                });
            } else {
                dispatch({
                    type: 'RESET_PASSWORD_FAIL',
                    payload: data.message,
                });
            }
        } catch (error) {
            dispatch({
                type: 'RESET_PASSWORD_FAIL',
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    }

    function userRegister(regUser) {
        dispatch({
            type: 'USER_REGISTER',
            payload: regUser,
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                user: state.userInfo,
                userLogin,
                userLogOut,
                userRegister,
                userValidation,
                resetUserPassword,
                error: state.error,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
