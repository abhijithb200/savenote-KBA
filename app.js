const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Notes = require('./models/noteModel')


//configs
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//Connect to mongodb
const URI = 'mongodb://127.0.0.1:27017/storenote'
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB')
})



//routes

//the home page
app.get('/', (req, res) => {
    res.render('home');
});

//accept data from the user through post request
app.post('/note', async (req, res) => {
    var {note,title,author,image} = req.body
    

    const newNote = new Notes({note,title,author,image})
    //Save the user provided details to the database
    await newNote.save((err,result)=>{
        if (err) console.log(err);
        else{
            const id = result._id
            res.redirect('/viewnote/'+id)
        }
    })
   
});

//display the note
app.get('/viewnote/:id',async (req, res) => {
    const id = req.params.id
    
    //retrieve the data from the database based on the id and render
    await Notes.findById(id).then((docs)=>{
            var date = docs.updatedAt.toISOString().match(/\d{4}-[01]\d-[0-3]\d+/)[0]
            res.render('viewnote',{note:docs.note,date:date,image:docs.image,title:docs.title,author:docs.author})
    })    
});


app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});