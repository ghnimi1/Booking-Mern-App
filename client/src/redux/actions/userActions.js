import axios from '../../axios'
import {
    FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL,
    DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL,
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL,
    FETCH_SINGLE_USER_REQUEST, FETCH_SINGLE_USER_SUCCESS, FETCH_SINGLE_USER_FAIL,
    FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAIL,
    UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL
} from '../actions/types'

export const fetchUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_USERS_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.get(`/users`, config)
        dispatch({
            type: FETCH_USERS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_USERS_FAIL,
            payload: message,
        })
    }
}

export const fetchSingleUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_SINGLE_USER_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.get(`/users/${id}`, config)
        dispatch({
            type: FETCH_SINGLE_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_SINGLE_USER_FAIL,
            payload: message,
        })
    }
}

export const fetchProfile = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_PROFILE_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.get(`/users/profile`, config)
        dispatch({
            type: FETCH_PROFILE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_PROFILE_FAIL,
            payload: message,
        })
    }
}

export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_USER_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.delete(`/users/${id}`, config)
        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: DELETE_USER_FAIL,
            payload: message,
        })
    }
}

export const updateUser = (id, user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_USER_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.put(`/users/${id}`, user, config)
        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: message,
        })
    }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_USER_PROFILE_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.put(`/users/updateProfile`, user, config)
        dispatch({
            type: UPDATE_USER_PROFILE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_USER_PROFILE_FAIL,
            payload: message,
        })
    }
}

export const updatePasswordProfile = (password) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_PASSWORD_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.put(`/users/updatePassword`, password, config)
        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: message,
        })
    }
}