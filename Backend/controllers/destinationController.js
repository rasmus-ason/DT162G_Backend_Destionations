const Destination = require('../models/destinationModel')
const mongoose = require('mongoose')

const express = require('express')

const bodyParser = require('express')

const app = express();

app.use(bodyParser.urlencoded({ 
    extended: true 
}));

// get all destinations
const getDestinations = async (req, res) => {
    //Hämta alla destinationer
    const destinations = await Destination.find()
    //Returnera ett 200-meddelande och destinationerna i json-format
    res.status(200).json(destinations)
}


// get single destination
const getDestination = async (req, res) => {
    const { id } = req.params

    //Kontroll så det är en giltig objectId
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Not a valid ID'})
    }
    const destination = await Destination.findById(id)

    if(!destination) {
        return res.status(400).json({error: 'Destination did not exist!'})
    }
    res.status(200).json(destination)

}


// create new destination
const createDestination = async (req, res) => {

    const {destinationName, country, category, best_months , ratings} = req.body 


    //En async function, response (document) lagras i workout tillsammans med nyskapade id
    try {
        /*I create-funktionen måste man skicka med ett objekt som representerar det nya dokumentet man vill skapa, ett 
        dokument skapas med dessa tre properties
        Det vi gör är att skapa ett nytt document till db med modelen 'Workout' som grund
        */
        const destination = await Destination.create({destinationName, country, category, best_months, ratings})
        res.status(200).json(destination)

    }catch(error) {
        res.status(400).json({error: error.message})
    }

}

// delete destination
 const deleteDestination = async (req, res) => {

     const { id } = req.params

     //Kontroll så det är en giltig objectId
     if(!mongoose.Types.ObjectId.isValid(id)){
         return res.status(404).json({error: 'Not a valid ID'})
     }

     const destination = await Destination.findOneAndDelete({_id: id})

     if(!destination) {
         return res.status(400).json({error: 'Destination with selected ID does not exist'})
     }

     res.status(200).json(destination)


 }


// update destination 
 const updateDestination = async (req, res) => {

     const { id } = req.params

     //Kontroll så det är en giltig objectId
     if(!mongoose.Types.ObjectId.isValid(id)){
         return res.status(404).json({error: 'Not a valid ID'})
     }

     const destination = await Destination.findByIdAndUpdate({_id: id}, {
         //Spread operator
         ...req.body
     })

     if(!destination) {
         return res.status(400).json({error: 'Destination with selected ID does not exist'})
     }

     res.status(200).json(destination)

 }

//Exportera funktionerna separat
module.exports = {
    createDestination,
    getDestinations,
    getDestination,
    deleteDestination,
    updateDestination
}