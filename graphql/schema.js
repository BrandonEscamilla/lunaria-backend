const { GraphQLSchema } = require('graphql');

const RootQuery = require('./queries/rootQuery');
const RootMutations = require('./mutations/RootMutations');


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutations
});