const { Router } = require('express')
const typeRouter = Router()

const typeHandler = require('../handlers/typeHandler')

typeRouter.get('/', typeHandler)

module.exports = typeRouter