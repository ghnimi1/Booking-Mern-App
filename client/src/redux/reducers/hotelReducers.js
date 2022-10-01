import {
    CREATE_HOTEL_REQUEST, CREATE_HOTEL_SUCCESS, CREATE_HOTEL_FAIL,
    FETCH_HOTELS_REQUEST, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAIL,
    FETCH_HOTELS_BY_CITY_REQUEST, FETCH_HOTELS_BY_CITY_SUCCESS, FETCH_HOTELS_BY_CITY_FAIL,
    DELETE_HOTEL_REQUEST, DELETE_HOTEL_SUCCESS, DELETE_HOTEL_FAIL,
    UPDATE_HOTEL_REQUEST, UPDATE_HOTEL_SUCCESS, UPDATE_HOTEL_FAIL,
    FETCH_SINGLE_HOTEL_REQUEST, FETCH_SINGLE_HOTEL_SUCCESS, FETCH_SINGLE_HOTEL_FAIL,
    COUNT_HOTELS_BY_TYPE_REQUEST, COUNT_HOTELS_BY_TYPE_SUCCESS, COUNT_HOTELS_BY_TYPE_FAIL,
    FEATURED_PROP_REQUEST, FEATURED_PROP_SUCCESS, FEATURED_PROP_FAIL,
    SEARCH_HOTEL_REQUEST, SEARCH_HOTEL_SUCCESS, SEARCH_HOTEL_FAIL,
    FETCH_HOTEL_ROOMS_REQUEST, FETCH_HOTEL_ROOMS_SUCCESS, FETCH_HOTEL_ROOMS_FAIL
} from '../actions/types'

export const createHotelReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_HOTEL_REQUEST:
            return {
                ...state,
                loading: true,
                success: null
            };
        case CREATE_HOTEL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                hotel: action.payload,
            };
        case CREATE_HOTEL_FAIL:
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

export const fetchHotelsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_HOTELS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_HOTELS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                hotels: action.payload,
            };
        case FETCH_HOTELS_FAIL:
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

export const featuredPropReducer = (state = {}, action) => {
    switch (action.type) {
        case FEATURED_PROP_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FEATURED_PROP_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                featuredProp: action.payload,
            };
        case FEATURED_PROP_FAIL:
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

export const fetchHotelsByCityReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_HOTELS_BY_CITY_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_HOTELS_BY_CITY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                hotelsByCity: action.payload,
            };
        case FETCH_HOTELS_BY_CITY_FAIL:
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

export const countHotelsByTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case COUNT_HOTELS_BY_TYPE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case COUNT_HOTELS_BY_TYPE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                hotelsByType: action.payload,
            };
        case COUNT_HOTELS_BY_TYPE_FAIL:
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

export const deleteHotelReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_HOTEL_REQUEST:
            return { loading: true }
        case DELETE_HOTEL_SUCCESS:
            return { loading: false, success: true, hotel: action.payload }
        case DELETE_HOTEL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const updateHotelReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_HOTEL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_HOTEL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                hotel: action.payload,
            };
        case UPDATE_HOTEL_FAIL:
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

export const fetchSingleHotelReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SINGLE_HOTEL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_SINGLE_HOTEL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                hotel: action.payload,
            };
        case FETCH_SINGLE_HOTEL_FAIL:
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

export const searchHotelsReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_HOTEL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case SEARCH_HOTEL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                searchHotels: action.payload,
            };
        case SEARCH_HOTEL_FAIL:
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

export const fetchHotelRoomsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_HOTEL_ROOMS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_HOTEL_ROOMS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                hotelRooms: action.payload,
            };
        case FETCH_HOTEL_ROOMS_FAIL:
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