require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connetDB')
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')
const hotelRoutes = require('./routes/hotel.routes')
const roomRoutes = require('./routes/room.routes')
const reservationRoutes = require('./routes/reservation.routes')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())
app.use(express.json());

connectDB()
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/hotels', hotelRoutes)
app.use('/api/rooms', roomRoutes)
app.use('/api/reservations', reservationRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port `, PORT))