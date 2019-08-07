const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

//Server configuration
const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-hpt01.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
}); //Database conection

server.use(cors()); //Settings to accept requests from frontend
server.use(express.json()); //Settings to accept json requests
server.use(routes);

server.listen(3333);

