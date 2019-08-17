// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
});

// Require external modules
const mongoose = require('mongoose')

const routes = require('./routes')

const throng = require('throng');

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Connect to DB
mongoose.connect('mongodb+srv://desire:OI9PR1QIRDYBiYPB@brandsng-k5x55.mongodb.net/cart?retryWrites=true&w=majority')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

routes.forEach((route, index) => {
 fastify.route(route)
})

// Initiate Concurrency
var WORKERS = process.env.WEB_CONCURRENCY || 1;

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
throng({
  workers: WORKERS,
  lifetime: Infinity
}, start);
