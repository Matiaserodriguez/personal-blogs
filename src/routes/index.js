const routes = require('express').Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger-output.json');

const users = require('./users');
const blogPosts = require('./blogPosts');


routes.use('/users', users);
routes.use('/blogPosts', blogPosts);

// Swagger routes
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = routes;