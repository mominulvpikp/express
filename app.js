const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', (req, res)=>{
    res.send('Hello');
});

app.get('/about', (req, res)=>{
    res.send('About');
});


app.get('*', (req, res)=>{
    res.send('Bad Url');
});



app.use((err, req, res, next)=>{
    res.send('Server Error');
});



module.exports = app;