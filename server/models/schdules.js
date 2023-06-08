const mongoose = require('mongoose')

const schedule = new mongoose.Schema(
    {class: String,
        monday: {classes: [],occupancy: []},
        tuesday: {classes: [],occupancy: []},
        wednesday: {classes: [],occupancy: []},
        thursday: {classes: [],occupancy: []},
        friday: {classes: [],occupancy: []}
})

schedule.set("toJSON",{
    transform:(document,returnedObject)=>{
        delete returnedObject._id
    }
})

const Schedule = mongoose.model("schedule",schedule)
module.exports = Schedule