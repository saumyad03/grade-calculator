const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({error: "Authorization required"})
    }
    const token = authorization.split(" ")[1]
    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        const user = await User.findById(_id)
        if (!user) {
            throw Error("Invalid authorization")
        }
        req.user = user
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
    next()
}

module.exports = { requireAuth }