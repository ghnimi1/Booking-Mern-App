const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        roomTitle: {
            type: String,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
        roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Reservation", ReservationSchema);