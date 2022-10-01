const express = require('express')
const router = express.Router()
const HotelController = require('../controllers/hotel.controller')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')

router.post('/', auth, admin, HotelController.createHotel)
router.get('/', HotelController.getHotels)
router.get("/countByCity", HotelController.countByCity);
router.get("/countByType", HotelController.countByType);
router.get('/:id', HotelController.getHotel)
router.get('/hotelRooms/:id', HotelController.getHotelRooms)
router.put('/:id', auth, admin, HotelController.updateHotel)
router.delete('/:id', auth, admin, HotelController.deleteHotel)


module.exports = router