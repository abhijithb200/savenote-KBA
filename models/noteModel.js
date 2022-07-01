const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    note : {
        type: String,
        required: true,
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Notes', noteSchema)