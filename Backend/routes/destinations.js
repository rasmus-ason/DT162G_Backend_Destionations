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

//Get all workouts
router.get('/', getDestinations)

//Get a single workout
router.get('/:id', getDestination)

//Post a workout, gå in i controllers och utför funktionen createWorkout
router.post('/', createDestination)

//Delete a workout
router.delete('/:id', deleteDestination)

//Update a workout
router.patch('/:id', updateDestination)

//Exporterar alla funktioner med router.verb
module.exports = router