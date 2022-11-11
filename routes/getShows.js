const { Router } = require("express")
const showRouter = Router()
const { Show } = require("../models/index")
const isEmpty = require("../Validation function/show")
const { body, validationResult } = require("express-validator")



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


showRouter.put("/Shows/:id/Rated", 
body("rating").isNumeric(),
async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(404).send({ errors: errors.array() })
    }
    const id = Number(req.params.id)
    const rated = req.body
    const show = await Show.findByPk(id)
    show.rating = rated.rating

    res.status(200).send(show)

})

showRouter.put("/Shows/:id/Status",
body("status").isLength({min: 5}),
body("status").isLength({max: 25}),
async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(404).send({ errors: errors.array() })
    }

    const id = Number(req.params.id)
    const show = await Show.findByPk(id)
    const currentStatus = req.body.status

    show.status = currentStatus

    res.status(200).send(show)
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