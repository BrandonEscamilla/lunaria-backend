const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const ThreeDModelsType = new GraphQLObjectType({
  name: 'Events',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }, 
    obj: { 
      data: { type: GraphQLString }
    },
    mtl: { 
      data: { type: GraphQLString }
    },
    topic: {type: GraphQLString}
  })
});

module.exports = ThreeDModelsType;