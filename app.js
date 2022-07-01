const express = require('express');
const {engine} = require('express-handlebars');


const app = express();
app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home');
});


app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});