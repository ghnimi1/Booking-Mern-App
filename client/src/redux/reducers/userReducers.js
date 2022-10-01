import {
    FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL,
    DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL,
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL,
    FETCH_SINGLE_USER_REQUEST, FETCH_SINGLE_USER_SUCCESS, FETCH_SINGLE_USER_FAIL,
    FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAIL,
    UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL
} from '../actions/types'

export const fetchUsersReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                users: action.payload,
            };
        case FETCH_USERS_FAIL:
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

export const deleteUserReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_USER_REQUEST:
            return { loading: true }
        case DELETE_USER_SUCCESS:
            return { loading: false, success: true, user: action.payload }
        case DELETE_USER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const updateUserReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                user: action.payload,
            };
        case UPDATE_USER_FAIL:
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

export const updateUserProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_USER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                updateUserProfile: action.payload,
            };
        case UPDATE_USER_PROFILE_FAIL:
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

export const updatePasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
                updatePassword: action.payload,
            };
        case UPDATE_PASSWORD_FAIL:
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

export const fetchSingleUserReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SINGLE_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_SINGLE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
            };
        case FETCH_SINGLE_USER_FAIL:
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

export const fetchProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: action.payload,
            };
        case FETCH_PROFILE_FAIL:
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
