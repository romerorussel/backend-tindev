const express = require('express');
//Controllers
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController')
const DisLikeController = require('./controllers/DislikeController')
const routes = express.Router();

//Routes
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DisLikeController.store);

module.exports = routes;