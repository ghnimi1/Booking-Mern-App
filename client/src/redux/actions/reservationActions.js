import axios from '../../axios'
import {
    CREATE_RESERVATION_REQUEST, CREATE_RESERVATION_SUCCESS, CREATE_RESERVATION_FAIL,
    FETCH_RESERVATIONS_REQUEST, FETCH_RESERVATIONS_SUCCESS, FETCH_RESERVATIONS_FAIL,
    FETCH_SINGLE_RESERVATION_REQUEST, FETCH_SINGLE_RESERVATION_SUCCESS, FETCH_SINGLE_RESERVATION_FAIL,
    FETCH_MY_RESERVATIONS_REQUEST, FETCH_MY_RESERVATIONS_SUCCESS, FETCH_MY_RESERVATIONS_FAIL
} from '../actions/types'

export const createReservation = (reservation) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_RESERVATION_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.post(`/reservations`, reservation, config)
        dispatch({
            type: CREATE_RESERVATION_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: CREATE_RESERVATION_FAIL,
            payload: message,
        })
    }
}

export const fetchReservations = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_RESERVATIONS_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.get(`/reservations`, config)
        dispatch({
            type: FETCH_RESERVATIONS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_RESERVATIONS_FAIL,
            payload: message,
        })
    }
}

export const fetchSingleReservation = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_SINGLE_RESERVATION_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.get(`/reservations/${id}`, config)
        dispatch({
            type: FETCH_SINGLE_RESERVATION_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_SINGLE_RESERVATION_FAIL,
            payload: message,
        })
    }
}

export const fetchMyReservations = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_MY_RESERVATIONS_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.get(`/reservations/me`, config)
        dispatch({
            type: FETCH_MY_RESERVATIONS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_MY_RESERVATIONS_FAIL,
            payload: message,
        })
    }
}
