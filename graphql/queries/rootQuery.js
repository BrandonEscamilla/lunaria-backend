const { GraphQLObjectType } =  require('graphql');

const queryAllEvents = require('./Events/queryAllEvents');
const queryEventsById = require('./Events/queryEventsById');
const queryEventsByDate = require('./Events/queryEventByDate');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryAllEvents,
    queryEventsById,
    queryEventsByDate
  }
})

module.exports = RootQuery;


