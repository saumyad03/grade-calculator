const express = require("express")
const { requireAuth } = require("../middleware/requireAuth")
const { createClass, updateClass, deleteClass, getClasses } = require("../controllers/classController")

const router = express.Router()

router.use(requireAuth)

router.get("/", getClasses)

router.post("/", createClass)

router.patch("/:name", updateClass)

router.delete("/:name", deleteClass)

module.exports = router