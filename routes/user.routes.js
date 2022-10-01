const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const admin = require('../middleware/admin')
const auth = require('../middleware/auth')

router.get('/', auth, admin, userController.getUsers)
router.get('/profile', auth, userController.getUserProfile)
router.put('/updateProfile', auth, userController.updateUserProfile)
router.put('/updatePassword', auth, userController.updatePassword)
router.get('/:id', auth, admin, userController.getUser)
router.delete('/:id', auth, admin, userController.deleteUser)
router.put('/:id', auth, userController.updateUser)


module.exports = router