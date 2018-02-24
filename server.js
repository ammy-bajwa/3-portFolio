const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 8080;
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('home.hbs',{
        title:'Home Page',
        currentYear: new Date().getFullYear()
    });
});
app.get('/about', (req, res) => {
    res.render('about.hbs',{
        title:'About Page',
        currentYear: new Date().getFullYear()
    });
});
app.get('/projects', (req, res) => {
    res.render('projects.hbs',{
        title:'Projects Page',
        currentYear: new Date().getFullYear()
    });
});

app.listen(port)