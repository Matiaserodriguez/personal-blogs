const routes = require('express').Router();
const blogPosts = require('../controllers/blogPostsController');
const { validationMiddleware } = require("../validation/validationMiddleware");
const { postBlogSchema } = require("../validation/postsRequests/blogPostsSchema");
const { putBlogSchema } = require("../validation/putRequests/blogPutSchema");

routes.get('/', blogPosts.getAllPosts);
routes.post('/', validationMiddleware(postBlogSchema), blogPosts.postPost);
routes.put('/:id',validationMiddleware(putBlogSchema), blogPosts.putPost);
routes.delete('/:id', blogPosts.deletePost);

module.exports = routes;
