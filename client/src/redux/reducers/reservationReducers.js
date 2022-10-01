import {
    CREATE_RESERVATION_REQUEST, CREATE_RESERVATION_SUCCESS, CREATE_RESERVATION_FAIL,
    FETCH_RESERVATIONS_REQUEST, FETCH_RESERVATIONS_SUCCESS, FETCH_RESERVATIONS_FAIL,
    FETCH_SINGLE_RESERVATION_REQUEST, FETCH_SINGLE_RESERVATION_SUCCESS, FETCH_SINGLE_RESERVATION_FAIL,
    FETCH_MY_RESERVATIONS_REQUEST, FETCH_MY_RESERVATIONS_SUCCESS, FETCH_MY_RESERVATIONS_FAIL
} from '../actions/types'

export const createReservationReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_RESERVATION_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CREATE_RESERVATION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                createReservation: action.payload,
            };
        case CREATE_RESERVATION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}

export const fetchReservationsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_RESERVATIONS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_RESERVATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                reservations: action.payload,
            };
        case FETCH_RESERVATIONS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}

export const fetchSingleReservationReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SINGLE_RESERVATION_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_SINGLE_RESERVATION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                reservation: action.payload,
            };
        case FETCH_SINGLE_RESERVATION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}

export const fetchMyReservationReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_MY_RESERVATIONS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_MY_RESERVATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                myReservations: action.payload,
            };
        case FETCH_MY_RESERVATIONS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null
            };
        default:
            return state
    }
}
