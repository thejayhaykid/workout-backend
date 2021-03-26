const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

const schema = require('./schema');
const resolvers = require('./resolvers');

const prisma = new PrismaClient();


const server = new ApolloServer({
  schema,
  resolvers,
  context: {
    prisma,
  }
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );