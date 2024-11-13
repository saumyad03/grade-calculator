const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema

const userSchema = new Schema({
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
})

userSchema.statics.signup = async function(email, password) {
    const exists = await this.findOne({email})
    if (exists) {
        throw Error("User with this email already exists")
    }
    const hash = await bcrypt.hash(password, 10)
    const user = this.create({email, password: hash})
    return user
}

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email})
    if (!user) {
        throw Error("User with this email doesn't exist")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error("Incorrect password")
    }
    return user
}

module.exports = mongoose.model("User", userSchema)