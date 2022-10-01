const UserModel = require('../models/user.model')

const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findById(id).select('-password')
        if (!user) { res.status(404).json({ msg: `No user with id : ${id}` }) }
        res.status(200).json(user)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({}).select('-password').sort({ isAdmin: -1 })
        res.status(200).json(users)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
const deleteUser = async (req, res) => {
    try {
        await UserModel.findByIdAndRemove({ _id: req.params.id })
        res.status(201).send({ msg: 'User removed' })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        if (user) {
            user.userName = req.body.userName || user.userName
            user.email = req.body.email || user.email
            user.country = req.body.country || user.country
            user.img = req.body.img || user.img
            user.city = req.body.city || user.city
            user.phone = req.body.phone || user.phone

            const updatedUser = await user.save()
            res.status(201).send({
                msg: "Successful Update User",
                _id: updatedUser._id,
                userName: updatedUser.userName,
                email: updatedUser.email,
                country: updatedUser.country,
                img: updatedUser.img,
                city: updatedUser.city,
                phone: updatedUser.phone,
            })
        }
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
const getUserProfile = async (req, res) => {
    try {
        const user = await UserModel.findOne({ user: req.user.id })
        if (!user) {
            res.status(404).json({ msg: "Error User" })
        }
        res.status(201).json(req.user)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const updateUserProfile = async (req, res) => {
    try {
        const updateProfile = {
            userName: req.body.userName,
            email: req.body.email,
            country: req.body.country,
            img: req.body.img,
            city: req.body.city,
            phone: req.body.phone,
        }
        await UserModel.findByIdAndUpdate(
            req.user.id,
            { $set: updateProfile },
            { new: true }
        );
        res.status(200).json({
            msg: "Successful Update Profil",
            _id: updatedUser._id,
            userName: updatedUser.userName,
            email: updatedUser.email,
            country: updatedUser.country,
            img: updatedUser.img,
            city: updatedUser.city,
            phone: updatedUser.phone,
        });
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const updatePassword = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id)
        if (user) {
            if (req.body.password.length < 6)
                return res.status(400).json({ msg: "Password is at least 6 characters long." })
            user.password = req.body.password || user.password
            const updatedUser = await user.save()
            res.status(201).json({
                msg: "Successful Update Password",
                _id: updatedUser._id,
                userName: updatedUser.userName,
                email: updatedUser.email,
            })
        }
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = {
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    getUserProfile,
    updateUserProfile,
    updatePassword
}