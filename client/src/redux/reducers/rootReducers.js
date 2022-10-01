import { combineReducers } from "redux"
import {
    userLoginReducer,
    userRegisterReducer
} from "./authReducers"
import {
    createHotelReducer,
    deleteHotelReducer,
    fetchHotelsReducer,
    fetchHotelsByCityReducer,
    fetchSingleHotelReducer,
    updateHotelReducer,
    countHotelsByTypeReducer,
    featuredPropReducer,
    searchHotelsReducer,
    fetchHotelRoomsReducer
} from "./hotelReducers";
import {
    createRoomReducer,
    deleteRoomReducer,
    fetchRoomsReducer,
    fetchSingleRoomReducer,
    updateRoomReducer,
    updateAvailabilityRoomReducer,
} from "./roomReducers";
import {
    deleteUserReducer,
    fetchProfileReducer,
    fetchSingleUserReducer,
    fetchUsersReducer,
    updateUserReducer,
    updateUserProfileReducer,
    updatePasswordReducer
} from "./userReducers";
import {
    fetchReservationsReducer,
    fetchSingleReservationReducer,
    fetchMyReservationReducer,
    createReservationReducer,
    deleteReservationReducer
} from './reservationReducers'

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    users: fetchUsersReducer,
    deleteUser: deleteUserReducer,
    updateUser: updateUserReducer,
    user: fetchSingleUserReducer,
    currentUser: fetchProfileReducer,
    updateUserProfile: updateUserProfileReducer,
    updatePassword: updatePasswordReducer,
    rooms: fetchRoomsReducer,
    deleteRoom: deleteRoomReducer,
    updateRoom: updateRoomReducer,
    createRoom: createRoomReducer,
    room: fetchSingleRoomReducer,
    availabilityRoom: updateAvailabilityRoomReducer,
    hotels: fetchHotelsReducer,
    hotelsByCity: fetchHotelsByCityReducer,
    deleteHotel: deleteHotelReducer,
    updateHotel: updateHotelReducer,
    createHotel: createHotelReducer,
    hotel: fetchSingleHotelReducer,
    hotelsByType: countHotelsByTypeReducer,
    featuredProp: featuredPropReducer,
    searchHotels: searchHotelsReducer,
    hotelRooms: fetchHotelRoomsReducer,
    reservations: fetchReservationsReducer,
    reservation: fetchSingleReservationReducer,
    myReservations: fetchMyReservationReducer,
    createReservation: createReservationReducer,
})

export default rootReducer;