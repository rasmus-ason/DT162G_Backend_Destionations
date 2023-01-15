const express = require('express')
const { requireAuth } = require('../middleware/authMiddleware')

//Importera funktioner
const {
    createDestination,
    getDestinations,
    getDestination,
    deleteDestination,
    updateDestination
} = require('../controllers/destinationController')

const router = express.Router()

//Get all destinations
router.get('/', getDestinations)

//Get a single destination
router.get('/:id', getDestination)

//Post a destination
router.post('/', createDestination)

//Delete a destination
router.delete('/:id', deleteDestination)

//Update a destination
router.patch('/:id', updateDestination)

//Exporterar alla funktioner med router.verb
module.exports = router