const { Router } = require("express")
const userRouter = Router()
const { User } = require("../models/index")
const { Show } = require("../models/index")


userRouter.get("/Users", async (req, res) => {
    const users = await User.findAll()
    res.status(200).send(users)
})

userRouter.get("/Users/:id", async (req, res) => {
    const id = Number(req.params.id)
    const user = await User.findByPk(id)
    res.status(200).send(user)
})

userRouter.get("/Users/:id/Shows", async (req, res) => {
    id = Number(req.params.id)
    user = await User.findByPk(id)
    userShows = await user.getShows()
    res.status(200).send(userShows)
})


userRouter.post("/Users/:id/Shows/:showID", async (req, res) => {
    const userID = Number(req.params.id)
    const showID = Number(req.params.showID)

    const user = await User.findByPk(userID)
    const show = await Show.findByPk(showID)

    await user.addShow(show)

    res.sendStatus(200)
})

userRouter.put("/Users/:id/Shows/:showID", async (req, res) => {
    const userID = Number(req.params.id)
    const showID = Number(req.params.showID)

    const user = await User.findByPk(userID)
    const show = await Show.findByPk(showID)

    // 
    // await show.update({
    //     rating: 10
    // })

    res.sendStatus(200)
})

module.exports = userRouter

