const routes = require('express').Router();
const users = require('../controllers/usersController');


routes.get('/', users.getOauthUser);

module.exports = routes;
