const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
    } else {
        res.status(401).send('Not authorized as an admin')
    }
    next()
}

module.exports = admin