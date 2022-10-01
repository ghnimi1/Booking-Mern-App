import {
    CREATE_ROOM_REQUEST, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAIL,
    FETCH_ROOMS_REQUEST, FETCH_ROOMS_SUCCESS, FETCH_ROOMS_FAIL,
    DELETE_ROOM_REQUEST, DELETE_ROOM_SUCCESS, DELETE_ROOM_FAIL,
    UPDATE_ROOM_REQUEST, UPDATE_ROOM_SUCCESS, UPDATE_ROOM_FAIL,
    FETCH_SINGLE_ROOM_REQUEST, FETCH_SINGLE_ROOM_SUCCESS, FETCH_SINGLE_ROOM_FAIL,
    ROOM_AVAILABILITY_REQUEST, ROOM_AVAILABILITY_SUCCESS, ROOM_AVAILABILITY_FAIL,
} from '../actions/types'

export const createRoomReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ROOM_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CREATE_ROOM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                createroom: action.payload,
            };
        case CREATE_ROOM_FAIL:
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

export const fetchRoomsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ROOMS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ROOMS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                rooms: action.payload,
            };
        case FETCH_ROOMS_FAIL:
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

export const deleteRoomReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_ROOM_REQUEST:
            return { loading: true }
        case DELETE_ROOM_SUCCESS:
            return { loading: false, success: true, room: action.payload }
        case DELETE_ROOM_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const updateRoomReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ROOM_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_ROOM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                room: action.payload,
            };
        case UPDATE_ROOM_FAIL:
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

export const fetchSingleRoomReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SINGLE_ROOM_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_SINGLE_ROOM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                room: action.payload,
            };
        case FETCH_SINGLE_ROOM_FAIL:
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

export const updateAvailabilityRoomReducer = (state = {}, action) => {
    switch (action.type) {
        case ROOM_AVAILABILITY_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ROOM_AVAILABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                availabilityRoom: action.payload,
            };
        case ROOM_AVAILABILITY_FAIL:
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

