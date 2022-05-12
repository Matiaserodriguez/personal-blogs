const routes = require('express').Router();
const accessToken = require('../controllers/accessToken');


routes.get('/', accessToken.getAccessToken);

module.exports = routes;
