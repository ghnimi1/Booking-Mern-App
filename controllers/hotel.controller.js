const HotelModel = require('../models/hotel.model')
const RoomModel = require('../models/room.model')
const ValidateHotel = require('../validator/hotel.validator')

const getHotels = async (req, res) => {
    try {
        const { min, max, ...others } = req.query;
        const hotels = await HotelModel.find({
            ...others,
            cheapestPrice: { $gt: min | 1, $lt: max || 999 },
        }).limit(req.query.limit);
        res.status(200).json(hotels)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
const getHotel = async (req, res) => {
    try {
        const hotel = await HotelModel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
const createHotel = async (req, res) => {
    const { errors, isValid } = ValidateHotel(req.body)
    try {
        const {
            name, type, city, address,
            distance, photos, title, desc,
            rooms, cheapestPrice, featured
        } = req.body;
        if (!isValid) {
            res.status(404).json({ msg: errors });
        } else {
            const newHotel = new HotelModel({
                name,
                type,
                city,
                address,
                distance,
                photos,
                title,
                desc,
                rooms,
                cheapestPrice,
                featured
            })
            await newHotel.save()
            res.status(200).json({
                msg: "Hotel Created",
                newHotel
            })
        }
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }

}
const updateHotel = async (req, res) => {
    try {
        const {
            name, type, city, address,
            distance, photos, title, desc,
            rooms, cheapestPrice, featured
        } = req.body;
        const updatedHotel = await HotelModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                name,
                type,
                city,
                address,
                distance,
                photos,
                title,
                desc,
                rooms,
                cheapestPrice,
                featured
            })
        res.json({
            msg: "Successful Update Hotel",
            updatedHotel
        })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const deleteHotel = async (req, res) => {
    try {
        await HotelModel.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ msg: "Hotel has been deleted" })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }

}
const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(
            cities.map((city) => {
                return HotelModel.countDocuments({ city: city });
            })
        );
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
};

const countByType = async (req, res, next) => {
    try {
        const hotelCount = await HotelModel.countDocuments({ type: "hotel" });
        const apartmentCount = await HotelModel.countDocuments({ type: "apartment" });
        const resortCount = await HotelModel.countDocuments({ type: "resort" });
        const villaCount = await HotelModel.countDocuments({ type: "villa" });
        const cabinCount = await HotelModel.countDocuments({ type: "cabin" });

        res.status(200).json([
            { type: "hotels", count: hotelCount },
            { type: "apartments", count: apartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villas", count: villaCount },
            { type: "cabins", count: cabinCount },
        ]);
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
};
const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await HotelModel.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) => {
                return RoomModel.findById(room);
            })
        );
        res.status(200).json(list)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
};
module.exports = {
    getHotels,
    getHotel,
    createHotel,
    updateHotel,
    deleteHotel,
    countByCity,
    countByType,
    getHotelRooms
}