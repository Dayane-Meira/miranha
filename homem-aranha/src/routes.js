const express = require('express');
const routes = express.Router();
basePath = __dirname + "/views";

routes.get('/', (request, response) => response.sendFile(basePath + "/home.html"))
routes.get('/aranha.html', (request, response) => response.sendFile(basePath + "/aranha.html"))


module.exports = routes;