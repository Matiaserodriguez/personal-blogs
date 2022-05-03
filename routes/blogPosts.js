const routes = require('express').Router();
const blogPosts = require('../controllers/blogPostsController');

routes.get('/', blogPosts.getAllPosts);
routes.post('/', blogPosts.postPost);

module.exports = routes;