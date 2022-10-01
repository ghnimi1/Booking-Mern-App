const ReservationModel = require('../models/reservation.model')
const roomModel = require('../models/room.model')
const UserModel = require('../models/user.model')

const getReservations = async (req, res) => {
    try {
        const reservations = await ReservationModel.find({})
        res.status(200).json(reservations)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const getMyReservations = async (req, res) => {
    try {
        const reservations = await ReservationModel.find({ user: req.user._id })
        res.status(200).json(reservations)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
const getReservation = async (req, res) => {
    try {
        const reservation = await ReservationModel.findById(req.params.id)
        res.status(200).json(reservation)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const createReservations = async (req, res) => {
    const { roomTitle, maxPeople, price, roomNumbers } = req.body
    try {
        const reservation = new ReservationModel({
            user: req.user._id,
            roomTitle,
            maxPeople,
            price,
            roomNumbers
        })
        const createdReservation = await reservation.save()
        res.status(201).json({ msg: "Reservation Created", createdReservation })
    } catch (error) {
        res.status(500).send({ msg: error })
    }
}

module.exports = {
    getReservations,
    createReservations,
    getMyReservations,
    getReservation,
}