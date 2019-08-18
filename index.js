// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
});

const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
})

fastify.get('/benchmarking', function (req, reply) {
  reply.sendFile('benchmark.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

// Require external modules
const mongoose = require('mongoose')

const routes = require('./routes')

const throng = require('throng');

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

fastify.register(require('fastify-formbody'))

// Connect to DB
mongoose.connect('mongodb+srv://desire:OI9PR1QIRDYBiYPB@brandsng-k5x55.mongodb.net/cart?retryWrites=true&w=majority')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

routes.forEach((route, index) => {
 fastify.route(route)
})

const autocannon = require('autocannon')

var jQuery = require("jquery");

// async/await
function benchMark (c, p, d) {
  const result = autocannon({
    url: 'https://nodejs-rest-cart-api.herokuapp.com/api/carts',
    connections: c, //default
    pipelining: p, // default
    duration: d // default
  })
  return result
}

// Declare a route
fastify.post('/benchmark', async (request, reply) => {
    var c = request.body.d
    var p = request.body.p
    var d = request.body.d
    let res = await benchMark(c,p,d);
    reply.send(res)
})

// Initiate Concurrency
var WORKERS = process.env.WEB_CONCURRENCY || 4;

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
