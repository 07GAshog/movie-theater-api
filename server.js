const express = require("express")
const seed = require("./seed")
const app = express()
const userRouter = require("./routes/getUsers")
const showRouter = require("./routes/getShows")

app.use(express.json())
app.use("/movie-theater-api", userRouter, showRouter)

app.listen(3000, async() => {
    await seed()
})