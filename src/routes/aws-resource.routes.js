const routes = require('express').Router();
const awsController = require('../controller/aws-resource.controller');
const serverController = require('../controller/start-server.controller');

routes.get('/', serverController);

routes.get('/aws-resource-details', awsController);

module.exports = routes;