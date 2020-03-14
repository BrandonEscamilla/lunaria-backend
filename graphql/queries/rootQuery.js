const { GraphQLObjectType } =  require('graphql');

const queryAllEvents = require('./Events/queryAllEvents')
const queryEventsById = require('./Events/queryEventsById');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryAllEvents,
    queryEventsById,
  }
})

module.exports = RootQuery;


