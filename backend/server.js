require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const userRoutes = require("./routes/user")
const classRoutes = require("./routes/class")

const app = express()

app.use(express.json())

app.use("/api/user", userRoutes)
app.use("/api/class", classRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to database and running on port", process.env.PORT)
        })
    }).catch(() => {
        console.log("Failed to connect to database")
    })