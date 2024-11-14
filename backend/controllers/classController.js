const User = require("../models/userModel")

const getClasses = async(req, res) => {
    const user = req.user
    res.status(200).json(user.classes)
}

const createClass = async (req, res) => {
    const {name, categories} = req.body
    const user = req.user
    if (user.classes.some(c => c.name === name)) {
        return res.status(409).json({error: "Class already exists"})
    }
    try {
        user.classes.push({name, categories})
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const updateClass = async(req, res) => {
    const {name} = req.params
    const {categories} = req.body
    const user = req.user
    for (let i = 0; i < user.classes.length; i++) {
        if (user.classes[i].name === name) {
            user.classes[i].categories = categories
            await user.save()
            return res.status(200).json(user)
        }
    }
    res.status(404).json({error: "Class doesn't exist"})
}

const deleteClass = async(req, res) => {
    const {name} = req.params
    const user = req.user
    user.classes = user.classes.filter(c => c.name !== name);
    await user.save()
    res.status(200).json(user)
}

module.exports = {
    getClasses,
    createClass,
    updateClass,
    deleteClass
}