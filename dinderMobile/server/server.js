const express = require('express');
const app = express();

const pgConnect = require('../db/pg.js');
const yelpData = require('./yelpComputation');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/authenticate', pgConnect.verifyUser, (req, res)=>{
    res.json({validated:res.locals.validated});
})
app.post('/signup', pgConnect.createUser, (req, res)=>{
    res.json({signedup: res.locals.signedup})
})
app.get('/getData', yelpData.filterData, (req, res)=>{
    console.log('here in get data, about to send it over', res.locals.businessList)
    res.json({businessList: res.locals.businessList});
})

app.listen(3000, ()=>{
    console.log('listening on port: 3000');
})


