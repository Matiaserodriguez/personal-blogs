const routes = require('express').Router();
const blogPosts = require('../controllers/blogPostsController');

routes.get('/', blogPosts.getAllPosts);
routes.post('/', blogPosts.postPost);
routes.put('/:id', blogPosts.putPost);
routes.delete('/:id', blogPosts.deletePost);

module.exports = routes;
