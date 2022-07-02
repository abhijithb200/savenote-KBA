const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    note : {
        type: String,
        required: true,
    },
    title:{
        type: String
    },
    author:{
        type: String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Notes', noteSchema)