const express = require('express')
const router = express.Router()
const ReservationController = require('../controllers/reservation.controller')
const admin = require('../middleware/admin')
const auth = require('../middleware/auth')

router.get('/', auth, admin, ReservationController.getReservations)
router.post('/', auth, ReservationController.createReservations)
router.get('/me', auth, ReservationController.getMyReservations)
router.get('/:id', auth, ReservationController.getReservation)

module.exports = router