const routes = require('express').Router();
const users = require('../controllers/usersController');

routes.get('/', users.getAllUsers);
routes.post('/', users.postUser);
routes.put('/:id', users.putUser);

module.exports = routes;