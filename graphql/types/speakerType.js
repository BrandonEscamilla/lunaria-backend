const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const SpeakerType = new GraphQLObjectType({
  name: 'Speaker',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }, 
    career: { type: GraphQLString },
    bio: { type: GraphQLString }
  })
});

module.exports = SpeakerType;