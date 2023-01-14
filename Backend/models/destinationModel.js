const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NestedRatings = new Schema ({
    _id: false,
    food:  Number,
    nightlife: Number,
    LGBTQ: Number,
    culture: Number,
    daytrips: Number,
    budgetFriendly: Number,
    spaLuxury: Number,
    adventureOutdoor: Number,
  });

const NestedVisitingSeasons = new Schema ({
    _id: false,
    summer : Boolean,
    fall:  Boolean,
    winter:  Boolean ,
    spring: Boolean 
    });

const destinationSchema = new Schema({
    destinationName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    best_months: {
        type: [NestedVisitingSeasons], 
        required: true}
    ,
    ratings: {type: [NestedRatings], required: true}

//Andra argumentet
}, { timestamps: true }
)


module.exports = mongoose.model('Destination', destinationSchema)

