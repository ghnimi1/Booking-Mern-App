const express = require('express')
const router = express.Router()
const RoomController = require('../controllers/room.controller')
const admin = require('../middleware/admin')
const auth = require('../middleware/auth')

router.get('/', RoomController.getRooms)
router.post('/:hotelId', auth, admin, RoomController.createRoom)
router.get('/:id', RoomController.getRoom)
router.put('/:id', auth, admin, RoomController.updateRoom)
router.delete('/:id', auth, admin, RoomController.deleteRoom)
router.put("/availability/:id", auth, RoomController.updateRoomAvailability);

module.exports = router