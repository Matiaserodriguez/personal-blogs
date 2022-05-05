const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Blog Posts API',
    description: 'This is an API for Posting blogs with Authentication',
  },
  host: 'cse341-personal-blog.herokuapp.com',
  schemes: ['https'],
};

const outputFile = 'swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);