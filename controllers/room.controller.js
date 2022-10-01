const hotelModel = require('../models/hotel.model')
const RoomModel = require('../models/room.model')
const ValidateRoom = require('../validator/room.validator')

const getRooms = async (req, res) => {
    try {
        const rooms = await RoomModel.find({})
        res.status(200).json(rooms)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
const getRoom = async (req, res) => {
    try {
        const room = await RoomModel.findById(req.params.id)
        res.status(200).json(room)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
const createRoom = async (req, res) => {
    const { errors, isValid } = ValidateRoom(req.body)
    const { title, price, desc, maxPeople, roomNumbers } = req.body

    if (!isValid) {
        res.status(404).json({ msg: errors });
    } else {
        try {
            const hotelId = req.params.hotelId;
            const newRoom = new RoomModel({
                hotelId: hotelId,
                title: title,
                price: price,
                maxPeople: maxPeople,
                desc: desc,
                roomNumbers
            });
            const savedRoom = await newRoom.save();
            await hotelModel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id }
            }, { new: true })
            res.status(200).json({
                msg: "Room Created",
                savedRoom
            });
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    }
}
const updateRoom = async (req, res) => {
    try {
        const updatedRoom = await RoomModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            msg: "Update Room Successful",
            updatedRoom
        });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}
const deleteRoom = async (req, res) => {
    try {
        const room = await RoomModel.findByIdAndRemove({ _id: req.params.id })
        await hotelModel.findOneAndUpdate({ _id: room.hotelId }, {
            $pull: { rooms: req.params.id }
        })
        res.status(200).json({ msg: "Room has been deleted" })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }

}

const updateRoomAvailability = async (req, res, next) => {
    try {
        await RoomModel.updateOne(
            { "roomNumbers._id": req.params.id },
            {
                $push: {
                    "roomNumbers.$.unavailableDates": req.body.dates
                },
            }
        );
        res.status(200).json({ msg: "Room status has been updated." });
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
};
module.exports = {
    getRooms,
    getRoom,
    createRoom,
    updateRoom,
    deleteRoom,
    updateRoomAvailability,
}