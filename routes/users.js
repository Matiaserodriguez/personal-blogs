const routes = require('express').Router();
const users = require('../controllers/usersController');

routes.get('/', users.getAllUsers);
routes.post('/', users.postUser);

module.exports = routes;