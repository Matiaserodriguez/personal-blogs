const routes = require('express').Router();

const users = require('./users');
const blogPosts = require('./blogPosts');


routes.use('/users', users);
// routes.use('/blogPosts', blogPosts);

module.exports = routes;
