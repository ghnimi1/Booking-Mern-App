const UserModel = require('../models/user.model')
const generateToken = require('../utils/jwt')
const ValidateUser = require('../validator/user.validator')

const register = async (req, res) => {
    const { errors, isValid } = ValidateUser(req.body)
    try {
        const { userName, password, email, country, img, city, phone } = req.body
        const userExists = await UserModel.findOne({ email })
        if (userExists) res.status(400).json({ msg: 'User already Exists' })
        if (!isValid) {
            res.status(404).json({ msg: errors });
        } else {
            const newUser = await UserModel.create({
                userName, password, email, country, img, city, phone
            })
            if (newUser) {
                // status 201 means sth was CREATED
                res.status(201).json({
                    msg: "Register Successful",
                    _id: newUser._id,
                    userName: newUser.userName,
                    country: newUser.country,
                    email: newUser.email,
                    img: newUser.img,
                    city: newUser.city,
                    phone: newUser.phone
                })
            }
        }
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (!user) return res.status(400).json({ msg: "User does not exist." })
        const isMatch = await user.comparePassword(password)
        if (!isMatch) return res.status(400).json({ msg: "Incorrect password." })
        if (user) return res.json({
            msg: "Login Successful",
            _id: user._id,
            userName: user.userName,
            country: user.country,
            email: user.email,
            img: user.img,
            city: user.city,
            phone: user.phone,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = {
    login,
    register
}