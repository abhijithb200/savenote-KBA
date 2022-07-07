const mongoose = require('mongoose')


//modal for the note
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
    },
    image:{
        type:String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Notes', noteSchema)