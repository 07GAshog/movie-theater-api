const { body, validationResult } = require("express-validator")

function isEmpty(req, res, next) {
    next()
}

module.exports = isEmpty
