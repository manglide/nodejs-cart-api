exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'NodeJS REST API',
      description: 'Building a blazing fast Products Cart REST API with Node.js, MongoDB, Fastify and Swagger',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'https://nodejs-rest-cart-api.herokuapp.com',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}
