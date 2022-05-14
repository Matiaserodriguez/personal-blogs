const routes = require('express').Router();
const users = require('../controllers/usersController');
const { validationMiddleware } = require("../validation/validationMiddleware");
const { postUserSchema } = require("../validation/postsRequests/usersPostsSchema");
const { putUserSchema } = require("../validation/putRequests/usersPutSchema");


routes.get('/', users.getAllUsers);
routes.post('/', validationMiddleware(postUserSchema), users.postUser);
routes.put('/:id', validationMiddleware(putUserSchema), users.putUser);
routes.delete('/:id', users.deleteUser);

module.exports = routes;
