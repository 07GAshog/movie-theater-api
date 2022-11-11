const { Router } = require("express")
const showRouter = Router()
const { Show } = require("../models/index")



showRouter.get("/Shows", async (req, res) => {
    const shows = await Show.findAll()
    res.status(200).send(shows)
})



showRouter.get("/Shows/:id", async (req, res) => {
    const id = Number(req.params.id)
    const show = await Show.findByPk(id)
    res.status(200).send(show)
})

showRouter.get("/Shows/Genre/Comedy", async (req, res) => {
    const comedy = await Show.findAll({where : {
        genre: "Comedy"
    }})
    res.status(200).send(comedy)
})

showRouter.get("/Shows/Genre/Drama", async (req, res) => {
    const drama = await Show.findAll({where : {
        genre: "Drama"
    }})
    res.status(200).send(drama)
})

showRouter.get("/Shows/Genre/Sitcom", async (req, res) => {
    const sitcom = await Show.findAll({where : {
        genre: "Sitcom"
    }})
    res.status(200).send(sitcom)
})

showRouter.get("/Shows/Genre/Horror", async (req, res) => {
    const horror = await Show.findAll({where : {
        genre: "Horror"
    }})
    res.status(200).send(horror)
})


showRouter.put("/Shows/:id/Rated/:rated", async (req, res) => {
    const id = Number(req.params.id)
    const rated = Number(req.params.rated)
    const show = await Show.findByPk(id)
    
    await show.update({
        rating: rated
    })

    res.sendStatus(200)

})

showRouter.put("/Shows/:id/Cancelled", async (req, res) => {
    const id = Number(req.params.id)
    const show = await Show.findByPk(id)
    
    await show.update({
        status: "cancelled"
    })

    res.sendStatus(200)

})

showRouter.put("/Shows/:id/Ongoing", async (req, res) => {
    const id = Number(req.params.id)
    const show = await Show.findByPk(id)
    
    await show.update({
        status: "on-going"
    })

    res.sendStatus(200)

})

showRouter.delete("/Shows/:id/Delete", async (req, res) => {
    const id = Number(req.params.id)
    await Show.destroy( {where: {
        id
    }})

    res.sendStatus(200)
})


// userRouter.put("/Shows/:status", async (req, res) => {

// })

// userRouter.delete("/Shows/:id", async (req, res) => {
    
// })

module.exports = showRouter