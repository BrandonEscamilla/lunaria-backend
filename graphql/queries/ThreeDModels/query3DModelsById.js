const { GraphQLString } =  require('graphql');
const threeDMOdelGraphQLType = require('../../types/eventType');
const ThreeDModel = require('../../../models/3dmodels');

module.exports = {
  type: threeDMOdelGraphQLType,
  args: { id: { type: GraphQLString }},
  resolve(parent, args) {
    return ThreeDModel.findById(args.id)
  }
};