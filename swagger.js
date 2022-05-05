const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Blog Posts API',
    description: 'This is an API for Posting blogs with Authentication',
  },
  host: 'nodejs-cse341.herokuapp.com',
  schemes: ['https'],
};

const outputFile = 'swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);