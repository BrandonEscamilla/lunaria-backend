const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const EventsType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }, 
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    description: { type: GraphQLString },
    speaker: { type: GraphQLString },
    image: { type: GraphQLString }
  })
});

module.exports = EventsType;