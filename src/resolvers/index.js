const Query = require('./query');
const Mutation = require('./mutation');
const User = require('./user');
const Workout = require('./workout');
const Exercise = require('./exercise');
const resolvers = { Query, Mutation, User, Workout, Exercise }

module.exports = resolvers;
