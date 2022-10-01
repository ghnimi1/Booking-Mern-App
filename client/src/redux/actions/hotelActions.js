import axios from '../../axios'
import {
    CREATE_HOTEL_REQUEST, CREATE_HOTEL_SUCCESS, CREATE_HOTEL_FAIL,
    FETCH_HOTELS_REQUEST, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_BY_CITY_REQUEST,
    FETCH_HOTELS_BY_CITY_SUCCESS, FETCH_HOTELS_BY_CITY_FAIL, FETCH_HOTELS_FAIL,
    DELETE_HOTEL_REQUEST, DELETE_HOTEL_SUCCESS, DELETE_HOTEL_FAIL,
    UPDATE_HOTEL_REQUEST, UPDATE_HOTEL_SUCCESS, UPDATE_HOTEL_FAIL,
    FETCH_SINGLE_HOTEL_REQUEST, FETCH_SINGLE_HOTEL_SUCCESS, FETCH_SINGLE_HOTEL_FAIL,
    COUNT_HOTELS_BY_TYPE_REQUEST, COUNT_HOTELS_BY_TYPE_SUCCESS, COUNT_HOTELS_BY_TYPE_FAIL,
    FEATURED_PROP_REQUEST, FEATURED_PROP_SUCCESS, FEATURED_PROP_FAIL,
    SEARCH_HOTEL_REQUEST, SEARCH_HOTEL_SUCCESS, SEARCH_HOTEL_FAIL,
    FETCH_HOTEL_ROOMS_REQUEST, FETCH_HOTEL_ROOMS_SUCCESS, FETCH_HOTEL_ROOMS_FAIL
} from '../actions/types'

export const createHotel = (hotel) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_HOTEL_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.post(`/hotels`, hotel, config)
        dispatch({
            type: CREATE_HOTEL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: CREATE_HOTEL_FAIL,
            payload: message,
        })
    }
}

export const fetchHotels = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_HOTELS_REQUEST,
        })
        const { data } = await axios.get(`/hotels`)
        dispatch({
            type: FETCH_HOTELS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_HOTELS_FAIL,
            payload: message,
        })
    }
}

export const fetchHotelsByCity = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_HOTELS_BY_CITY_REQUEST,
        })
        const { data } = await axios.get(`/hotels/countByCity?cities=Tunis,Sousse,Sfax`)
        dispatch({
            type: FETCH_HOTELS_BY_CITY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_HOTELS_BY_CITY_FAIL,
            payload: message,
        })
    }
}

export const featuredProp = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FEATURED_PROP_REQUEST,
        })
        const { data } = await axios.get(`/hotels?featured=true&limit=4`)
        dispatch({
            type: FEATURED_PROP_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FEATURED_PROP_FAIL,
            payload: message,
        })
    }
}


export const countHotelsByType = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: COUNT_HOTELS_BY_TYPE_REQUEST,
        })
        const { data } = await axios.get(`/hotels/countByType`)
        dispatch({
            type: COUNT_HOTELS_BY_TYPE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: COUNT_HOTELS_BY_TYPE_FAIL,
            payload: message,
        })
    }
}

export const fetchSingleHotel = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_SINGLE_HOTEL_REQUEST,
        })
        const { data } = await axios.get(`/hotels/${id}`)
        dispatch({
            type: FETCH_SINGLE_HOTEL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_SINGLE_HOTEL_FAIL,
            payload: message,
        })
    }
}


export const deleteHotel = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_HOTEL_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.delete(`/hotels/${id}`, config)
        dispatch({
            type: DELETE_HOTEL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: DELETE_HOTEL_FAIL,
            payload: message,
        })
    }
}

export const updateHotel = (id, hotel) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_HOTEL_REQUEST,
        })
        const token = JSON.parse(localStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const { data } = await axios.put(`/hotels/${id}`, hotel, config)
        dispatch({
            type: UPDATE_HOTEL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: UPDATE_HOTEL_FAIL,
            payload: message,
        })
    }
}

export const searchHotel = (destination, min, max) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SEARCH_HOTEL_REQUEST,
        })
        const { data } = await axios.get(`/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`,
            { destination, min, max })
        dispatch({
            type: SEARCH_HOTEL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: SEARCH_HOTEL_FAIL,
            payload: message,
        })
    }
}

export const fetchHotelRooms = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FETCH_HOTEL_ROOMS_REQUEST,
        })
        const { data } = await axios.get(`/hotels/hotelRooms/${id}`)
        dispatch({
            type: FETCH_HOTEL_ROOMS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.msg
                ? error.response.data.msg
                : error.msg
        dispatch({
            type: FETCH_HOTEL_ROOMS_FAIL,
            payload: message,
        })
    }
}