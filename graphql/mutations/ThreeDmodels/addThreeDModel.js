const { GraphQLObjectType, GraphQLString } = require('graphql');
const threeDModelGraphQLType = require('../../types/ThreeDModelType');
const threeDModel = require('../../../models/3dmodels');

module.exports = {
  type: threeDModelGraphQLType,
  args: {
    name: { type: GraphQLString }, 
    obj: {
      data: { type: GraphQLString }
    },
    mtl: {
      data: { type: GraphQLString }
    },
    topic: { type: GraphQLString }
  },
  resolve(parent, args) {
    const newThreeDModel = new threeDModel({
      name: args.name,
      topic: args.topic
    })

    return newThreeDModel.save();
  }
};

