const routes = require('express').Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger-output.json');

const users = require('./users');
const blogPosts = require('./blogPosts');
const oauth = require('./oauth');
const accessToken = require('./accessToken');
const helper = require('../helpers/authorize');


routes.use('/users', helper.isAuthorized, users);
routes.use('/blogPosts', helper.isAuthorized, blogPosts);
routes.use('/login/oauth/authorize', oauth);
routes.use('/api/session', accessToken)

// Swagger routes
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = routes;
