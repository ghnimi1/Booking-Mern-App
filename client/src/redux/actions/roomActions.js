import axios from '../../axios'
import {
    CREATE_ROOM_REQUEST, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAIL,
    FETCH_ROOMS_REQUEST, FETCH_ROOMS_SUCCESS, FETCH_ROOMS_FAIL,
    DELETE_ROOM_REQUEST, DELETE_ROOM_SUCCESS, DELETE_ROOM_FAIL,
    UPDATE_ROOM_REQUEST, UPDATE_ROOM_SUCCESS, UPDATE_ROOM_FAIL,
    FETCH_SINGLE_ROOM_REQUEST, FETCH_SINGLE_ROOM_SUCCESS, FETCH_SINGLE_ROOM_FAIL,
    ROOM_AVAILABILITY_REQUEST, ROOM_AVAILABILITY_SUCCESS, ROOM_AVAILABILITY_FAIL,
} from '../actions/types'

export const createRoom = (id, room) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_ROOM_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.post(`/rooms/${id}`, room, config)
        dispatch({
            type: CREATE_ROOM_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: CREATE_ROOM_FAIL,
            payload: message,
        })
    }
}

export const fetchRooms = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_ROOMS_REQUEST,
        })
        const { data } = await axios.get(`/rooms`)
        dispatch({
            type: FETCH_ROOMS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_ROOMS_FAIL,
            payload: message,
        })
    }
}

export const fetchSingleRoom = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_SINGLE_ROOM_REQUEST,
        })
        const { data } = await axios.get(`/rooms/${id}`)
        dispatch({
            type: FETCH_SINGLE_ROOM_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_SINGLE_ROOM_FAIL,
            payload: message,
        })
    }
}


export const deleteRoom = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_ROOM_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.delete(`/rooms/${id}`, config)
        dispatch({
            type: DELETE_ROOM_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: DELETE_ROOM_FAIL,
            payload: message,
        })
    }
}

export const updateRoom = (id, room) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_ROOM_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.put(`/rooms/${id}`, room, config)
        dispatch({
            type: UPDATE_ROOM_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_ROOM_FAIL,
            payload: message,
        })
    }
}

export const updateAvailabilityRoom = (id, dates) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ROOM_AVAILABILITY_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.put(`/rooms/availability/${id}`, dates, config)
        dispatch({
            type: ROOM_AVAILABILITY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: ROOM_AVAILABILITY_FAIL,
            payload: message,
        })
    }
}

