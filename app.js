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
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/note', async (req, res) => {
    var note = req.body.note

    const newNote = new Notes({note})
    // Save mongodb
    await newNote.save((err,result)=>{
        if (err) console.log(err);
        else{
            const id = result._id
            console.log(id)
            res.redirect('/viewnote/'+id)
        }
    })
   
});

app.get('/viewnote/:id',async (req, res) => {
    const id = req.params.id
    await Notes.findById(id).then((docs)=>{
            res.render('viewnote',{note:docs.note})
    })
    // res.send("tagId is set to " + req.params.id)
    
});


app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});