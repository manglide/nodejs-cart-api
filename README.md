# A NodeJS REST Cart API

For Documentation, please see https://nodejs-rest-cart-api.herokuapp.com/documentation

For Concurrency and Benchmarking, please see https://nodejs-rest-cart-api.herokuapp.com/benchmarking

This app uses the free 500MB offered by https://cloud.mongodb.com , Heroku's mLab is no longer receiving Sign Ups. See https://www.mongodb.com/atlas-signup-from-mlab

For Database Schema, please see models/Cart.js

For Database creation, please see vendor/Schema.js. You'll need mongodb installed and script called from the terminal as stated as follows:- 

~$ mongo vendor/Schema.js

Benchmarking tests were carried out using Node JS Autocannon. Please see https://github.com/mcollina/autocannon

These tests can be carried out on the command line with the code below

autocannon -c 100 -p 1 -d 5 https://nodejs-rest-cart-api.herokuapp.com

On the concurrency web version, increasing the pipelines from 1 higher sometimes causes an Internal Server Error. The command line can be a fall back option.
