const express = require('express');
const monsgoose = require('mongoose')

const routes = require('./routes')

const server = express();

monsgoose.connect('mongodb+srv://felipe:felipe@cluster0-xxeny.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true 
})

server.use(express.json())
server.use(routes) 

server.listen(3333)